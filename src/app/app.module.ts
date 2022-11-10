import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';


const routers: Routes=[
  {path:'home',component: FrontPageComponent},
  {path:'products',component: ProductsComponent},
  {path:'addProduct',component: AddProductComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    ProductsComponent,
    AddProductComponent
  ],
  imports: [ AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routers)
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
