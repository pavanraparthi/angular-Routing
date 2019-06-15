import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsLoaded:boolean = false;
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  loadProducts() {
    this.productsLoaded = true;
    this._router.navigate(['products']);
  }
}