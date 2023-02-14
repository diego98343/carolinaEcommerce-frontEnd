import { Injector, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './components/home-page/front-page.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UserLogInComponent } from './components/user-log-in/user-log-in.component';
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';


import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductCategory } from './models/productCategoryClass/product-category';
import { ContactComponent } from './components/contact/contact.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { UpdateProductComponent } from './components/add-product/update-product/update-product.component';
import { ListOfOrdersComponent } from './components/list-of-orders/list-of-orders.component';
import { LogInStatusComponent } from './components/log-in-status/log-in-status.component';



import { AuthModule } from '@auth0/auth0-angular';
import { MatPaginatorModule } from '@angular/material/paginator';





const routers: Routes=[

  {path:'login',component: UserLogInComponent},


  {path:'home',component: FrontPageComponent},
  {path:'products',component: ProductsComponent},
  {path:'addProduct',component: AddProductComponent},
  {path:'userRegistration',component: UserRegistrationComponent},
  {path:'productList',component: ListOfProductsComponent},
  {path:'editProduct/:id',component: UpdateProductComponent},
  {path:'productCategories',component: ProductsComponent},
  {path:'cart',component: ShoppingCartComponent},
  {path:'products/:id',component: ProductDetailsComponent},
  {path:'productCategories/:id',component: ProductsComponent},
  {path:'contact',component: ContactComponent},
  {path:'checkOut',component:CheckOutComponent},
  {path:'ordersList',component:ListOfOrdersComponent},
  {path:'',component: FrontPageComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',redirectTo:'home',pathMatch:'full'},
  {path:'',redirectTo:'/home',pathMatch:'full'},

]



@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    ProductsComponent,
    AddProductComponent,
    UserLogInComponent,
    ListOfProductsComponent,
    UserRegistrationComponent,
    ShoppingCartComponent,
    ProductDetailsComponent,
    ContactComponent,
    NavBarComponent,
    CheckOutComponent,
    UpdateProductComponent,
    ListOfOrdersComponent,
    LogInStatusComponent,
    
    
    
   
    
  ],
  imports: [ 
    RouterModule.forRoot(routers),
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    MatDialogModule, 
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    
  
   
    AuthModule.forRoot({
      domain: 'dev-w5321ximnia6xn5y.us.auth0.com',
      clientId: 'uifSYOTm1J4rlQt7Zizj2VG913fXIAtN',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
,
   
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent],
  entryComponents:[AddProductComponent]
})
export class AppModule { }
