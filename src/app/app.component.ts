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
    {id:'1',name:'Product 1',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",cost:"$200.00"},
    {id:'2',name:'Product 2',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",cost:"$220.00"},
    {id:'3',name:'Product 3',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",cost:"$230.00"},
    {id:'4',name:'Product 4',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",cost:"$240.00"},
    {id:'5',name:'Product 5',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",cost:"$250.00"},
    {id:'6',name:'Product 6',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",cost:"$260.00"},
    {id:'7',name:'Product 7',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",cost:"$270.00"},
    {id:'8',name:'Product 8',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",cost:"$280.00"},
    {id:'9',name:'Product 9',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",cost:"$290.00"}

  ]
}
