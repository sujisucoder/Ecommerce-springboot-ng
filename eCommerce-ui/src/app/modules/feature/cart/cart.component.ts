import { Component } from '@angular/core';
import { CartItemComponent } from "../../shared/cart-item/cart-item.component";
import { MatDivider } from '@angular/material/divider';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, MatDivider, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cart= [1,1,2,3];

  constructor(private router: Router){

  }

  navigateToCheckout(){
    console.log("clicked");
    
    this.router.navigate(['checkout'])
  }

}
