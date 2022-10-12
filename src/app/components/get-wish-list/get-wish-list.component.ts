import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ActivatedRoute, Router } from '@angular/router';

import { WishlistserviceService } from 'src/app/services/wishListServices/wishlistservice.service';


@Component({
  selector: 'app-get-wish-list',
  templateUrl: './get-wish-list.component.html',
  styleUrls: ['./get-wish-list.component.scss']
})
export class GetWishListComponent implements OnInit {

  wishList: any;

  // @Output() DeleteEvent = new EventEmitter<string>();


  constructor( private wishlist: WishlistserviceService, private route: ActivatedRoute,private snackbar:MatSnackBar) { }

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

      this.snackbar.open("Book Remove Successfully","" ,{
        duration: 2000,
      });
      this.getwishlist();
      // this.DeleteEvent.emit(response)
    })
  }

}
