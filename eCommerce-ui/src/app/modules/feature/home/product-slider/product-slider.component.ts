import { Component, Input } from '@angular/core';
import { HomeProductCardComponent } from "../home-product-card/home-product-card.component";

@Component({
  selector: 'app-product-slider',
  imports: [HomeProductCardComponent],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css'
})
export class ProductSliderComponent {
  @Input() title:any;
  @Input() products:any;
}
