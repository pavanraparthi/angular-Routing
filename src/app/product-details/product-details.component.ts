import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Product } from '../models/product';
import { SafeUrl } from '@angular/platform-browser';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  @Input()
  selectedProduct:Product;
  imgSafeUrl:SafeUrl;

  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this.imgSafeUrl = this._productService.getDefaultProductImage();
  }

  ngOnChanges(){
    // console.table(this.selectedProduct);  
  }

}
