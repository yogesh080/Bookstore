import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  show = true;

  constructor( private dataService: DataServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  searchBook(event:any)
  {
      console.log("bookSearch",event.target.value)
      this.dataService.changeMessage(event.target.value)
  }

  logout(){
    localStorage.removeItem("token")
    this.router.navigateByUrl("/login")
    console.log("logout sucessfully!!!");
    this.show = false;
  }

}
