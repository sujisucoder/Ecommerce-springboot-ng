import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { CustomersComponent } from './customers/customers.component';
import { CreateProductComponent } from './create-product/create-product.component';

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                title: "AdminDashboard",
                component: AdminDashboardComponent,
            },
            {
                path: 'products',
                title: "AdminProducts",
                component: AdminProductsComponent,
            },
            {
                path: 'orders',
                title: "AdminOrders",
                component: OrdersTableComponent,
            },
            {
                path: 'customers',
                title: "Admin-Customers",
                component: CustomersComponent,
            },
            {
                path: 'create-product',
                title: "Admin-products-create",
                component: CreateProductComponent,
            },
        ]
    },

];