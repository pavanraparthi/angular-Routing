import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsLoaded:boolean = false;
  constructor(private _router:Router, private _productService:ProductService) { }

  ngOnInit() {
    this.productsLoaded = this._productService.isProductListLoaded();
  }

  loadProducts() {
    this._productService.loadProductList();
    this.productsLoaded = true;
    this._router.navigate(['products']);
  }
}
