import { Component } from '@angular/core';
import { AddressFormComponent } from "./address-form/address-form.component";

@Component({
  selector: 'app-checkout',
  imports: [AddressFormComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

}
