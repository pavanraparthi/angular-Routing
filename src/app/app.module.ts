import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'products',children:[
    {path:'',component:ProductsComponent},
    {path:'id:code',component:ProductDetailsComponent}
  ]}
]

@NgModule({
  imports:[ BrowserModule, FormsModule,
          RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HomeComponent, ProductsComponent, ProductDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
