import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpServices/http-services.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  token: any;

  constructor(private httpService: HttpServiceService) {
    this.token = localStorage.getItem("token")
  }

  Getaddress(UserId:any){
    console.log("=====> address service")
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.GetService('/Address', true, header);

  }
}
