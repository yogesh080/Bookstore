import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpServices/http-services.service';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  token: any;

  constructor(private httpService: HttpServiceService) {
    this.token = localStorage.getItem("token")
  }

  getallbook() {
    this.token = localStorage.getItem('token')
    console.log("cool")
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token

      })

    }
    return this.httpService.GetService('/BookDetail/GetAllBooks',true,header )
  }
}
