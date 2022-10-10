import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpServices/http-services.service';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AddcartserviceService {

  token:any;

  constructor(private httpService: HttpServiceService) { 
    this.token = localStorage.getItem("token")
  }

  getallAddCarts(){
    this.token= localStorage.getItem('token')
    console.log("addcart service")

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token

      })

    }
    return this.httpService.GetService('/AddCart/RetrieveCartItems', true, header)

  }


  deleteCard(CardId:any){

    console.log(CardId);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token

      })

    }
    return this.httpService.deleteservices(`/AddCart/DeleteFromCart?CartId=${CardId}`, true, header);

  }
}
