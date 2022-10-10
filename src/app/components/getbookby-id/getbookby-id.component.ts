import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/services/bookServices/bookservice.service';
import { WishlistserviceService } from 'src/app/services/wishListServices/wishlistservice.service';

@Component({
  selector: 'app-getbookby-id',
  templateUrl: './getbookby-id.component.html',
  styleUrls: ['./getbookby-id.component.scss']
})
export class GetbookbyIdComponent implements OnInit {

  Book:any;
  wishList: any;
  book:any;
  

  constructor(private getBook: BookserviceService, private wishlist: WishlistserviceService) { }

  ngOnInit(): void {


    this.getbookid();
    
  }

  getbookid(){
    console.log("got all notes")
    this.getBook.getallbook().subscribe((response:any)=>{
      console.log(response)
      this.Book = response.data;
      console.log(this.Book)

    })
  }


  addwishlist(data:any){
    console.log("add wishlist")
    console.log(data)
    
    console.log(data.bookId)
    this.wishlist.addtoWishList(data.bookId).subscribe((response:any) => {
      console.log(response)
    })
  }

  AddtoCart(data:any){
    console.log("data====> " , data.bookId);
    let reqdata={
      BookId: data.bookId,
      BookQuantity: 1
    }
    console.log(reqdata);

    this.getBook.addtocart(reqdata).subscribe((response:any)=>{
      console.log(response);
    })
  }



  

}
