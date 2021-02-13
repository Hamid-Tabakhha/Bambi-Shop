import { Component, OnInit } from '@angular/core';


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
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
action = false;

  products: product[] = [
    {name: 'One', price: 3, producerCompany: 'brazers', img: '' , desc: 'new product'},
    {name: 'two', price: 12, producerCompany: 'brazers', img: '' , desc: 'new product'},
    {name: 'three', price: 1, producerCompany: 'brazers', img: '' , desc: 'new product'},
    {name: 'four', price: 24, producerCompany: 'brazers', img: '' , desc: 'new product'},
    {name: 'five', price: 5, producerCompany: 'brazers', img: '' , desc: 'new product'},
  ];
}
