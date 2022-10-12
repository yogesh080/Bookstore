import { Component, OnInit } from '@angular/core';
import { AddcartserviceService } from 'src/app/services/addcartService/addcartservice.service';
import { AddressServiceService } from 'src/app/services/addressService/address-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-addto-card',
  templateUrl: './addto-card.component.html',
  styleUrls: ['./addto-card.component.scss']
})
export class AddtoCardComponent implements OnInit {

  cartList: any;
  CardId: any;
  adqnt: any;

  constructor(private cartlist: AddcartserviceService,private address: AddressServiceService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.getallAddCard()

  }

  getallAddCard() {
    console.log("get add cart list")

    this.cartlist.getallAddCarts().subscribe((response: any) => {
      console.log(response)
      this.cartList = response.data
      console.log(this.cartList)
    })

  }

  deletefromCard(data: any) {
    console.log(data)
    console.log(data.cartId)
    this.cartlist.deleteCard(data.cartId).subscribe((response: any) => {
      console.log(response)
      this.snackbar.open("Book Remove Successfully","" ,{
        duration: 1000,
      });
      this.getallAddCard();
    })

  }


  addQnt(data: any) {
    this.adqnt = data.bookQuantity;
    this.adqnt = this.adqnt + 1;
    data.bookQuantity = this.adqnt;

    if (this.adqnt <= 0) {
      console.log("this statement is wrong");
    }
    else {
      this.CardId = data.cartId;

      let Data = {
        BookQuantity: this.adqnt,
        BookId: data.bookId,
      }
      console.log(Data);
      console.log(this.CardId);

      this.cartList.addUpdateCart(this.CardId, Data).subscribe((Request: any) => {
        console.log(Request);
      })
    }
  }

  qnt: any;
  lessQnt(data: any) {
    this.qnt = data.bookQuantity;
    this.qnt--;
    data.bookQuantity = this.qnt;

    console.log(data.cartId, data.bookId, this.qnt);
    if (this.qnt <= 0) {
      data.bookQuantity = 0;
    }
    else {
      console.log(this.qnt);
      console.log("this statement is write");

      this.CardId = data.cartId;

      let Data = {
        BookQuantity: this.adqnt,
        BookId: data.bookId,
      }
      console.log(Data);
      console.log(this.CardId);

      this.cartList.addUpdateCart(this.CardId, Data).subscribe((Request: any) => {
        console.log(Request);
      })

    }
  }

}
