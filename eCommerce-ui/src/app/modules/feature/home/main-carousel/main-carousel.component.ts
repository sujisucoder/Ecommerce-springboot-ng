import { Component } from '@angular/core';
import { homeCarouselData } from '../../../../../data/mainCarousel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-carousel',
  imports: [RouterLink],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.css'
})
export class MainCarouselComponent {
  carouselData:any
  currentSlide:number=0;

  ngOnInit(){
    this.carouselData = homeCarouselData; 
    this.autoPlay();
  }

  autoPlay(){
    setInterval(()=>{
      this.nextSlide();
    },2000)
  }

  nextSlide(){
    this.currentSlide = (this.currentSlide+1) % this.carouselData.length;
  }
}
