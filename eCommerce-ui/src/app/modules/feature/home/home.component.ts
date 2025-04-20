import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { MainCarouselComponent } from "./main-carousel/main-carousel.component";
import { ProductSliderComponent } from "./product-slider/product-slider.component";
import { menJeans } from '../../../../data/Men/men_jeans';
import { gounsPage1 } from '../../../../data/Gouns/gouns';
import { lengha_page1 } from '../../../../data/Women/LenghaCholi';
import { kurtaPage1 } from '../../../../data/Kurta/kurta';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, MainCarouselComponent, ProductSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  menJeans:any;
  womenGouns:any;
  lenghaCholi:any;
  menKurta:any;
  menShoes:any;

  ngOnInit(){
    this.menJeans = menJeans.slice(0,5);
    this.womenGouns = gounsPage1.slice(0,5);
    this.lenghaCholi = lengha_page1.slice(0,5);
    this.menKurta = kurtaPage1.slice(0,5);
  
    
  }

}
