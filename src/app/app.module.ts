import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './services/product.service';


const routes:Routes = [
  {path:'products',component:ProductsComponent},
  {path:'products/:id',component:ProductsComponent}
]

@NgModule({
  imports:[ BrowserModule, FormsModule,
          RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HomeComponent, ProductsComponent, ProductDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ProductService ]
})
export class AppModule { }
