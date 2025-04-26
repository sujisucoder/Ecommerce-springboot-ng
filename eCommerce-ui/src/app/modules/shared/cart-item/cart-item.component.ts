import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-cart-item',
  imports: [MatIcon],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {

  @Input() showButton:any;

  updateCartItem(num:number){
    console.log(num);
    
  }
  
  removeCartItem(){
    console.log('item removed');
    

  }

  
  


}
