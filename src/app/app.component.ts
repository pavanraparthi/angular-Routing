import { Component } from '@angular/core';
import { Product } from './models/product'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  productsList:Product[] = [
    {id:'1',name:'Product 1',description:'Ptoduct 1 Description'},
    {id:'2',name:'Product 2',description:'Ptoduct 2 Description'},
    {id:'3',name:'Product 3',description:'Ptoduct 3 Description'},
    {id:'4',name:'Product 4',description:'Ptoduct 4 Description'},
    {id:'5',name:'Product 5',description:'Ptoduct 5 Description'},
    {id:'6',name:'Product 6',description:'Ptoduct 6 Description'},
    {id:'7',name:'Product 7',description:'Ptoduct 7 Description'}
  ]
}
