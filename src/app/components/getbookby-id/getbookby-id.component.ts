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
  bookId:any;
  getbook:any
  

  constructor(private getBook: BookserviceService, private wishlist: WishlistserviceService) { }

  ngOnInit(): void {
    
    this.Book=localStorage.getItem('bookid')
    console.log(this.Book);
    this.getbookid();


    
  }

  getbookid(){
    console.log("got book id ", this.Book)
    this.getBook.bookidbyid(this.Book).subscribe((response:any)=>{
      console.log(response)
      this.getBook = response.data;
      console.log(this.getBook)

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
