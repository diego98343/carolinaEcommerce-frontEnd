import { NgModule } from '@angular/core';
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





const routers: Routes=[
  {path:'home',component: FrontPageComponent},
  {path:'products',component: ProductsComponent},
  {path:'addProduct',component: AddProductComponent},
  {path:'userLogIn',component: UserLogInComponent},
  {path:'productList',component: ListOfProductsComponent},
 
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
    
    
    
  ],
  imports: [ 
    RouterModule.forRoot(routers),
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
