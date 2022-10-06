import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpServices/http-services.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  token:any;

  constructor(private httpService: HttpServiceService) {
    this.token = localStorage.getItem("token")
   }

   registration(reqdata:any){
    console.log(reqdata)

    let header= {
      Headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    console.log(reqdata);
    return this.httpService.postService('/User/Register', reqdata, false, header)
   }
}

