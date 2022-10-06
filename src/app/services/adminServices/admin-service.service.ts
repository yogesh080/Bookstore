import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpServices/http-services.service';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  token:any;

  constructor(private httpService: HttpServiceService) { 
    this.token = localStorage.getItem("token")
  }

  adminlogin(reqdata: any)
  {
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    console.log(reqdata);

    return this.httpService.postService('/Admin/Login', reqdata, false, header)

  }
}
