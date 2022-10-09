import { Component, OnInit } from '@angular/core';

import { WishlistserviceService } from 'src/app/services/wishListServices/wishlistservice.service';

@Component({
  selector: 'app-get-wish-list',
  templateUrl: './get-wish-list.component.html',
  styleUrls: ['./get-wish-list.component.scss']
})
export class GetWishListComponent implements OnInit {

  wishList: any;

  constructor( private wishlist: WishlistserviceService) { }

  ngOnInit(): void {
    this.getwishlist();
  }

  getwishlist(){

    console.log("getwishlist")

    this.wishlist.getallWishList().subscribe((response:any) => {
      console.log(response)

      this.wishList = response.data;
      console.log(this.wishList)
    })



  }

  deletewishlist(data:any){
    console.log("delete wishlist")
    console.log(data)
    
    console.log(data.wishListId)
    this.wishlist.deleteWishList(data.wishListId).subscribe((response:any) => {
      console.log(response)
    })
  }

}
