import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-product-card',
  imports: [],
  templateUrl: './home-product-card.component.html',
  styleUrl: './home-product-card.component.css'
})
export class HomeProductCardComponent {

  @Input() product:any;

}
