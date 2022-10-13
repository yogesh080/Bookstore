import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpServices/http-services.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  token: any;

  constructor(private httpService: HttpServiceService) {
    this.token = localStorage.getItem("token")
  }


  AllOrder(){
    this.token = localStorage.getItem('token')
    console.log("Order service")

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token

      })
    }
    return this.httpService.GetService('/Order/GetAllOrder', true, header)  

  }

  PlaceOrder(reqdata:any){
    this.token = localStorage.getItem('token')
    console.log("Order place service")

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token

      })
  }
  return this.httpService.postService('/Order/AddOrder', reqdata ,true, header)
}

}
