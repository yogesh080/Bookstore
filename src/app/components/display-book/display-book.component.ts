import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {

  @Input() BookArray:any;

  constructor() { }

  ngOnInit(): void {

    console.log("Get all books", this.BookArray)
  }

}
