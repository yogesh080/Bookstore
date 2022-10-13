import { Component, OnInit } from '@angular/core';

import { AddressServiceService } from 'src/app/services/addressService/address-service.service';
import { OrderServiceService } from 'src/app/services/addOrderService/order-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-address-component',
  templateUrl: './address-component.component.html',
  styleUrls: ['./address-component.component.scss']
})
export class AddressComponentComponent implements OnInit {


  addressId:any

  toDisplay = true;
  
  toggleData() {
    this.toDisplay = !this.toDisplay;
  }

  constructor(private address: AddressServiceService, private getorder: OrderServiceService ,private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    // this.getaddress();
    this.useraddress();
    this.getallOrder();
  }

  // UserArray:any;
  getaddress(){
    console.log("get all address  ===> ")
    this.address.Getaddress(this.addressId).subscribe((response:any) => {
      console.log(response)
      // this.UserArray=response.data;
      // console.log(this.UserArray);
    })
  }
  UserArray:any;
  useraddress(){
    console.log("get all address by USERID  ===> ")
    this.address.Getaddress(this.addressId).subscribe((response:any) => {
      console.log(response)
      this.UserArray=response.data;
      console.log(this.UserArray);
    })
  }



  OrderList: any
  getallOrder() {
    console.log("get add cart list")

    this.getorder.AllOrder().subscribe((response: any) => {
      console.log(response)
      this.OrderList = response.data
      console.log(this.OrderList)
    })
  }


  addressid: any ;
  Continue(id: any, quantity: any) {
    let reqdata = {
      BookId: id,
      Quantity: quantity,
      AddressId: this.addressid,
    }
    console.log("order======>>", reqdata);
      this.getorder.PlaceOrder(reqdata).subscribe((Response: any) => {
        console.log(Response);
        this.snackbar.open("Book Ordered Successfully", "", {
          duration: 2000,
        });

      })
  }





}
