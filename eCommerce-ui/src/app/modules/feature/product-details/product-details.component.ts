import { Component } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ProductReviewCardComponent } from "./product-review-card/product-review-card.component";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { lengha_page1 } from '../../../../data/Women/LenghaCholi';
import { lehngacholiPage2 } from '../../../../data/Saree/lenghaCholiPage2';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { StarRatingComponent } from "../../shared/star-rating/star-rating.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [MatRadioModule, FormsModule, MatButtonModule, ProductReviewCardComponent, MatProgressBarModule, ProductCardComponent, StarRatingComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  selectedSize:any;
  reviews:any=[1,2,3,4,5];
  relatedProducts:any;

  constructor(private router: Router){}

  ngOnInit(){
    this.relatedProducts = lehngacholiPage2;
  }

  handleAddToCart(){
    console.log("selected size", this.selectedSize);
    this.router.navigate(['cart']);

  }
 
}
