import { Component } from '@angular/core';
import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-admin-dashboard',
  imports: [MatSidenavModule, MatIconModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  modeValue='over' as MatDrawerMode;
  opened():boolean{
    return true;
  }
}
