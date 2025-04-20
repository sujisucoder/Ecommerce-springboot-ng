import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminDashboardComponent } from "./modules/admin/admin-dashboard/admin-dashboard.component";
import { HomeComponent } from "./modules/feature/home/home.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, AdminDashboardComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eCommerce-ui';
}
