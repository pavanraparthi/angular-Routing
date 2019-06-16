import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ProductService } from './product.service';
@Injectable()
export class ProductActivateService implements CanActivate{

  constructor(private _productService:ProductService, private _router:Router) { }

  canActivate(){
    if(!this._productService.isProductListLoaded()){
      this._router.navigate([''])
      return false;
    }
    return true;
  }

}