import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminDashboardComponent } from "./modules/admin/admin-dashboard/admin-dashboard.component";
import { HomeComponent } from "./modules/feature/home/home.component";
import { ProductListComponent } from "./modules/feature/product-list/product-list.component";
import { NavbarComponent } from "./modules/shared/navbar/navbar.component";
import { FooterComponent } from "./modules/shared/footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, AdminDashboardComponent, HomeComponent, ProductListComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eCommerce-ui';
}
