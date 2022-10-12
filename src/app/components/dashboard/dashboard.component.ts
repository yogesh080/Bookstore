import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private dataService: DataServiceService) { }

  ngOnInit(): void {
  }

  searchBook(event:any)
  {
      console.log("bookSearch",event.target.value)
      this.dataService.changeMessage(event.target.value)
  }

}
