import { Component } from '@angular/core';
import { AddressCardComponent } from "../checkout/address-card/address-card.component";
import { CartItemComponent } from "../../shared/cart-item/cart-item.component";
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-payment',
  imports: [AddressCardComponent, CartItemComponent,MatDivider],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  products=[1,1,];

}
