import { Component } from '@angular/core';
import { AddressCardComponent } from "../address-card/address-card.component";
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-address-form',
  imports: [AddressCardComponent, MatDivider, MatButton, FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css'
})
export class AddressFormComponent {

  addresses = [1, 1, 1];

  myForm!: FormGroup; // Use definite assignment assertion

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      mobile: ['', Validators.required],
    });
  }

  handleCreateOrder(item: any) {

  }

  handleSubmit() {
    const formValue = this.myForm.value;
    console.log("form data", formValue);
  }

}
