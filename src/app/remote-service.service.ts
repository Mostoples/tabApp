import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const KambingUrl = "http://localhost/pkkmb/index2.php/";
const MabaUrl = "http://localhost/pkkmb/index.php/";
@Injectable({
  providedIn: 'root'
})
export class RemoteServiceService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    let response1 = this.http.get(MabaUrl);
    let response2= this.http.get(KambingUrl);
    return forkJoin([response1, response2]);
  }
}
