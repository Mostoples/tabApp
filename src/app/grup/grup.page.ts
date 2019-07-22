import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RemoteServiceService } from '../remote-service.service';

@Component({
  selector: 'app-grup',
  templateUrl: 'grup.page.html',
  styleUrls: ['grup.page.scss'],
})
export class GrupPage {
  data1: any;
  data2: any;
  data3: any;
  data4: any;
  constructor(public api: RemoteServiceService, public loadingController: LoadingController) {
  }
  async getData() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.api.getData()
      .subscribe(res => {
        console.log(res);
        this.data1 = res[0];
        this.data2 = res[1];
        this.data3 = res[2];
        this.data4 = res[3];
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  ngOnInit() {
    this.getData();
  }
}
