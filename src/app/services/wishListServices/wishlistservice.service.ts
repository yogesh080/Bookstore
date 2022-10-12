import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpServices/http-services.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistserviceService {

  token:any;

  constructor( private httpService: HttpServiceService) { 
    this.token = localStorage.getItem("token")
  }
  getallWishList(){
    this.token= localStorage.getItem('token')
    console.log("wishlist service")
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token

      })

    }
    return this.httpService.GetService('/WishList/GetWishListedItems', true, header)
  }

  deleteWishList(wishListId:any){


    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token

      })

    }
    return this.httpService.deleteservices(`/WishList/DeleteFromWishList?WishListId=${wishListId}`, true, header)

  }

  addtoWishList(bookId:any){
    console.log("cool")
    console.log(bookId)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer " + this.token

      })

    }
  return this.httpService.postService('/WishList/AddToWishList',bookId,true,header)
  }
}
