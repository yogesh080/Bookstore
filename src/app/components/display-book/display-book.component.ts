import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {

  @Input() BookArray:any;

  Search:any = '';

  constructor(private route:Router, private dataservice: DataServiceService ) { }

  ngOnInit(): void {

    // console.log("Get all books", this.BookArray)

    this.dataservice.currentMessage.subscribe(message => {
      console.log("display====>",message)
      this.Search = message

      
    })

    console.log("Get all books", this.BookArray)
  }


  bookid(getdatabyid:any){
    localStorage.setItem('bookid', getdatabyid.bookId);
    console.log("book", getdatabyid.bookId)
    this.route.navigateByUrl('dashboard/book')

  }
  

}
