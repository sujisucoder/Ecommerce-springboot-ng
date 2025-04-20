import { Component, Input } from '@angular/core';
import { navigation } from './nav-content';

@Component({
  selector: 'app-nav-content',
  imports: [],
  templateUrl: './nav-content.component.html',
  styleUrl: './nav-content.component.css'
})
export class NavContentComponent {
  catergory:any;
  @Input() selectedSection:any;

  ngOnInit(){
    this.catergory = navigation;
    // console.log(navigation['men'].sections);
    
  }

}
