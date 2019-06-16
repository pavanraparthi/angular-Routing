import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList:Product[];
  private selectedProduct:string;
  userSelectedProduct:Product;

  constructor(private _productService:ProductService, private _router:Router,private _route:ActivatedRoute) {
    this._route.params.subscribe( params => {
    this.productList = this._productService.getProductList();
    this.selectedProduct = this.productList[0].id;
    this.userSelectedProduct = this.productList[0]
      
      if(params['id']){
        this.selectedProduct = params['id'];
        this.userSelectedProduct = this._productService.getProductList()
                                      .filter(product => product.id === this.selectedProduct)[0];
        // console.log('id :: '+params['id']);                              
        // console.table(this.userSelectedProduct);                                      
      }
    })
  }

  ngOnInit() {
  }

  onProductSelect(id:string) {
    this._router.navigate(['./products', id]);
  }

}
