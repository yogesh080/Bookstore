import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  getbook:any;
  totalRating:any;
  comment:any;
  booksArray:any;


  constructor(private getBook: BookserviceService, private wishlist: WishlistserviceService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    
    this.Book=localStorage.getItem('bookid')
    console.log(this.Book);
    this.getbookid();
    this.getFeedback();
    
  }

  getbookid(){
    console.log("got book id ", this.Book)
    this.getBook.bookidbyid(this.Book).subscribe((response:any)=>{
      console.log(response)
      this.getbook = response.data;
      console.log(this.getBook)

    })
  }


  addwishlist(data:any){
    console.log("add wishlist")
    console.log(data);
    let reqdata = {
      BookId: data.bookId,
    }
    
    console.log(data.bookId)
    this.wishlist.addtoWishList(reqdata).subscribe((response:any) => {
      console.log(response)
      this.snack.open("added to wishlist ","" ,{
        duration: 1000,
    })
    this.getbookid();
  })}

  AddtoCart(data:any){
    console.log("data====> " , data.bookId);
    let reqdata={
      BookId: data.bookId,
      BookQuantity: 1
    }
    console.log(reqdata);

    this.getBook.addtocart(reqdata).subscribe((response:any)=>{
      console.log(response);
      this.snack.open("added to cart ","" ,{
        duration: 1000,
      })
      this.getbookid();
      
    })
  }

  //feedback

  addFeedback(getbook:any) {
    let data = {
      TotalRating: parseFloat(this.totalRating),
      Comment: this.comment,
      BookId: getbook.bookId,
    };

    console.log(data);

    this.getBook.addFeadback(data).subscribe(
      (response: any) => {
        console.log('User Feedback', response);
  
        this.snack.open('add feedback  Successfull', '', {
          duration: 2000,
        })
        this.getFeedback();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  getFeedback() {
    
    console.log("Get feedback ====>")
    console.log(this.Book);

    this.getBook.getfeedBack(this.Book).subscribe((response: any) => {
    
      console.log(response);
      this.booksArray=response.data;
      console.log(this.booksArray);
    });
  }

}
