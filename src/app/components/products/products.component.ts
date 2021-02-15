import {Component} from '@angular/core';
import {GettingProductDataService} from '../../Services/getting-product-data.service';

// tslint:disable-next-line:class-name
export interface product {
  name: string;
  price: number;
  producerCompany: string;
  img: string;
  desc: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [GettingProductDataService]
})
export class ProductsComponent {
  action = false;

  constructor(private gettingData: GettingProductDataService) {
  }

  products: product[] = [
    {name: 'One', price: 3, producerCompany: 'nasa', img: '', desc: 'new product'},
    {name: 'two', price: 12, producerCompany: 'nasa', img: '', desc: 'new product'},
    {name: 'three', price: 1, producerCompany: 'nasa', img: '', desc: 'new product'},
    {name: 'four', price: 24, producerCompany: 'nasa', img: '', desc: 'new product'},
    {name: 'five', price: 5, producerCompany: 'nasa', img: '', desc: 'new product'},
    {name: 'six', price: 36, producerCompany: 'nasa', img: '', desc: 'new product'},
  ];
}
