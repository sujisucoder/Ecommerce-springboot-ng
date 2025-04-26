import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  imports: [],
  templateUrl: './address-card.component.html',
  styleUrl: './address-card.component.css'
})
export class AddressCardComponent {
  @Input() address:any;
  @Input() showButton:any;

}
