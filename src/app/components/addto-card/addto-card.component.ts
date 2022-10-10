import { Component, OnInit } from '@angular/core';
import { AddcartserviceService } from 'src/app/services/addcartService/addcartservice.service';

@Component({
  selector: 'app-addto-card',
  templateUrl: './addto-card.component.html',
  styleUrls: ['./addto-card.component.scss']
})
export class AddtoCardComponent implements OnInit {

  cartList:any;

  constructor(private cartlist: AddcartserviceService) { }

  ngOnInit(): void {
    this.getallAddCard()
  }

  getallAddCard(){
    console.log("get add cart list")

    this.cartlist.getallAddCarts().subscribe((response:any) =>{
      console.log(response)
      this.cartList = response.data
      console.log(this.cartList)
    })

  }

  deletefromCard(data:any){
    console.log(data)
    console.log(data.cartId)
    this.cartlist.deleteCard(data.cartId).subscribe((response:any)=>{
      console.log(response)
    })

  }

}
