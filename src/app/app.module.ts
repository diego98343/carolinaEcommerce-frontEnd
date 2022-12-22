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
import { Router } from 'express';
import { UserLogInComponent } from './components/user-log-in/user-log-in.component';
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';


import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';





const routers: Routes=[
  {path:'home',component: FrontPageComponent},
  {path:'products',component: ProductsComponent},
  {path:'addProduct',component: AddProductComponent},
  {path:'userLogIn',component: UserLogInComponent},
  {path:'productList',component: ListOfProductsComponent},
  {path:'editProduct/:id',component: AddProductComponent},
  {path:'productCategories',component: ProductsComponent},

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddProductComponent]
})
export class AppModule { }
