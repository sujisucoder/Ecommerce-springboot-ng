import { Routes } from '@angular/router';
import { HomeComponent } from './modules/feature/home/home.component';
import { ProductListComponent } from './modules/feature/product-list/product-list.component';
import { CartComponent } from './modules/feature/cart/cart.component';
import { ProductDetailsComponent } from './modules/feature/product-details/product-details.component';
import { CheckoutComponent } from './modules/feature/checkout/checkout.component';
import { PaymentComponent } from './modules/feature/payment/payment.component';
import { PaymentSuccessComponent } from './modules/feature/payment-success/payment-success.component';
import { OrderComponent } from './modules/feature/order/order.component';
import { OrderDetailsComponent } from './modules/feature/order-details/order-details.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { ADMIN_ROUTES } from './modules/admin/admin.routes';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    // {path:"product", component:ProductListComponent}
    {path:"product-details/:id", component:ProductDetailsComponent },
    {path:'cart', component: CartComponent},
    {path:'checkout', component: CheckoutComponent},
    {path:'checkout/payment/:id', component: PaymentComponent},
    {path:':levelOne/:levelTwo/:levelThree', component:ProductListComponent},
    {path:'payment-success', component: PaymentSuccessComponent},
    {path:'account/orders', component: OrderComponent},
    {path:'orders/:id', component: OrderDetailsComponent },
    {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.routes').then(m => m.ADMIN_ROUTES)
      },
    { path: '**', component: PageNotFoundComponent }, 
];
