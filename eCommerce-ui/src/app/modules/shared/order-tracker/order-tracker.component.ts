import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-order-tracker',
  imports: [MatIcon, MatDivider, CommonModule],
  templateUrl: './order-tracker.component.html',
  styleUrl: './order-tracker.component.css'
})
export class OrderTrackerComponent {

  @Input() activeStep:any;
  @Input() steps:any;


}
