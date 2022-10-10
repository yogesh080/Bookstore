import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {

  @Input() BookArray:any;

  constructor(private route:Router) { }

  ngOnInit(): void {

    console.log("Get all books", this.BookArray)
  }


  bookid(getdatabyid:any){
    localStorage.setItem('bookid', getdatabyid.bookId);
    console.log("book", getdatabyid.bookId)
    this.route.navigateByUrl('dashboard/book')

  }
  

}
