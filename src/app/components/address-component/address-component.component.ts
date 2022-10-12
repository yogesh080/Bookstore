import { Component, OnInit } from '@angular/core';

import { AddressServiceService } from 'src/app/services/addressService/address-service.service';



@Component({
  selector: 'app-address-component',
  templateUrl: './address-component.component.html',
  styleUrls: ['./address-component.component.scss']
})
export class AddressComponentComponent implements OnInit {


  addressId:any

  constructor(private address: AddressServiceService ) { }

  ngOnInit(): void {
    this.getaddress();
  }

  getaddress(){
    console.log("get all address by userId ===> ")
    this.address.Getaddress(this.addressId).subscribe((response:any) => {
      console.log(response)
    })
  }

}
