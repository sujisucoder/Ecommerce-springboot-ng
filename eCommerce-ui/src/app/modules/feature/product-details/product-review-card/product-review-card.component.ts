import { Component } from '@angular/core';
import { StarRatingComponent } from "../../../shared/star-rating/star-rating.component";

@Component({
  selector: 'app-product-review-card',
  imports: [StarRatingComponent],
  templateUrl: './product-review-card.component.html',
  styleUrl: './product-review-card.component.css'
})
export class ProductReviewCardComponent {

}
