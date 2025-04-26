import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { filters, singleFilter } from './filterData';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { mensPantsPage1 } from '../../../../data/pants/men_page1';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  imports: [MatButtonModule, MatMenuModule, MatDividerModule, MatIcon, MatCheckboxModule, FormsModule, MatRadioModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private router: Router,private activatedRoute: ActivatedRoute) {}

  filterData:any;
  singleFilterData:any;
  menPants:any;

  ngOnInit(){
    this.filterData = filters;
    this.singleFilterData = singleFilter;
    this.menPants = mensPantsPage1;
    console.log(filters);
  }

  handleMultipleSelectFilter(value:string, sectionId:string){
    const queryParams = {...this.activatedRoute.snapshot.queryParams};
    // console.log("query params",queryParams);
    const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(',') :[];
    const valueIndex = filterValues.indexOf(value);
    if (valueIndex!=-1) {
      filterValues.splice(valueIndex, 1)
    }else{
      filterValues.push(value);
    }
    if(filterValues.length>0){
      queryParams[sectionId] = filterValues.join(",")
    }else{
      delete queryParams[sectionId];
    }
    this.router.navigate([],{queryParams});
  }

  handleSingleSelectFilter(value:string, sectionId:string){
    const queryParams = {...this.activatedRoute.snapshot.queryParams};
    queryParams[sectionId] = value;
    this.router.navigate([],{queryParams});

  }



}
