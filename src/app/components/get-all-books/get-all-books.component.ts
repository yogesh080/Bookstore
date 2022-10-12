import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookserviceService } from 'src/app/services/bookServices/bookservice.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {

  BookList=[]

  @Output() DeleteEvent = new EventEmitter<string>();

  constructor(private getBook: BookserviceService) { }

  ngOnInit(): void {
    this.getAllBooks()
  }

  getAllBooks(){
    console.log("got all notes")
    this.getBook.getallbook().subscribe((response:any)=>{
      console.log(response)
      
      this.BookList = response.data;

      console.log(this.BookList)

    })

  
}

getallBooksbyid(){

  console.log("get book by id")
    
} 

}
