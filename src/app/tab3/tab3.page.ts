import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { throwError, from } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  define1 = 1;
  define2 = 0;
  namae = '';
  ide = '';
  prodie = '';
  fakultase = '';
  user = '';
  myPhoto: any;
  error: string;
  loading: any;
 
  
  
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private loadingController: LoadingController,
    private storage: Storage,
    private http: HttpClient,
    private toastCtrl: ToastController,
    ) {
      this.storage.get('USER_INFO').then(res => {
        this.namae = res.NAMA_PESERTA;
        this.user = res.UNAME;
        this.ide = res.NIM_PESERTA;
        this.prodie = res.PRODI_PESERTA;
        this.fakultase = res.FAKULTAS_PESERTA;
        
      });
    }

    ngOnInit() {}

    
    ionViewDidLeave() {
      
      this.define1 = 1;
      this.define2 = 0;
      
    }

  async getData(fun) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    // tslint:disable-next-line: no-unused-expression
    fun;
    loading.dismiss();
  }

  logoutUser() {
    this.getData(this.authService);
    this.authService.logout();
  }

  next(para) {
    this.authService.isAuthenticated();
    this.router.navigate([para]);
  }

  Profil() {
    this.define1 = 0;
    this.define2 = 1;
    
  }

  tab3(){
    this.define1 = 1;
    this.define2 = 0;
  }

  selectPhoto(): void {
    const camera: any = navigator['camera'];
    camera.getPicture(imageData => {
      this.myPhoto = this.convertFileSrc(imageData);
      this.uploadPhoto(imageData);
    }, error => this.error = JSON.stringify(error), {
      sourceType: camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: camera.DestinationType.FILE_URI,
      quality: 100,
      encodingType: camera.EncodingType.JPEG,
    });
  }
  private convertFileSrc(url: string): string {
    if (!url) {
      return url;
    }
    if (url.startsWith('/')){
      return window ['WEBVIEW_SERVER_URL'] + '/_app_file_' + url;
    }
    if (url.startsWith('file://')) {
      return window['WEBVIEW_SERVER_URL'] + url.replace('file://', '/_app_file_');
    }
    if (url.startsWith('content://')) {
      return window['WEBVIEW_SERVER_URL'] + url.replace('content:/', '/_app_content_');
    }
    return url; 
  }
  private async uploadPhoto(imageFileUri: any) {
    this.error = null;
    this.loading = await this.loadingController.create({
      message: 'Uploading...'
    });

    this.loading.present();

    window['resolveLocalFileSystemURL'](imageFileUri,
      entry => {
        entry['file'](file => this.readFile(file));
      });
  }

  private readFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {type: file.type});
      formData.append('file', imgBlob, file.name);
      this.postData(formData);
    };
    reader.readAsArrayBuffer(file);
  
  } 
  
   private postData(formData: FormData){
     this.http.post<Boolean>(`${environment.production}/upload`, formData)
     .pipe(
       catchError(e => this.handleError(e)),
       finalize(() => this.loading.dismiss())
     )
     .subscribe(ok => this.showToast(ok));
   }

    private async showToast(ok: boolean | {}){
      if (ok == true){
        const toast = await this.toastCtrl.create({
          message: 'upload successful',
          duration: 3000,
          position: 'top',
        });
        toast.present();
      } else {
        const toast = await this.toastCtrl.create({
          message: 'upload failed',
          duration: 3000,
          position: 'top',

        });
        toast.present();
      }
    }

    private handleError(error:any){
      const errMsg = error.message ? error.message : error.toString();
      this.error = errMsg;
      return throwError(errMsg);
    }

    }

