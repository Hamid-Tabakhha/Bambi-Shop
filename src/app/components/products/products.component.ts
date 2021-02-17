import {Component, OnInit} from '@angular/core';
import {GettingProductDataService} from '../../Services/getting-product-data.service';
import {MegaMenuItem} from 'primeng/api';

// tslint:disable-next-line:class-name
export interface product {
  name: string;
  price: number;
  company: string;
  img: string;
  desc: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [GettingProductDataService]
})
export class ProductsComponent implements OnInit {

  constructor(private gettingData: GettingProductDataService) {
  }

  action = false;

  items: MegaMenuItem[];

  products: product[] = [
    {name: 'One', price: 3, company: 'nasa', img: '', desc: 'new product'},
    {name: 'two', price: 12, company: 'lsa', img: '', desc: 'new product'},
    {name: 'three', price: 1, company: 'bsa', img: '', desc: 'new product'},
    {name: 'four', price: 24, company: 'tesla', img: '', desc: 'new product'},
    {name: 'five', price: 5, company: 'shisha', img: '', desc: 'new product'},
    {name: 'six', price: 36, company: 'nina', img: '', desc: 'new product'},
  ];

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.items = [
      {
        label: 'نوع محصول', icon: 'pi pi-fw pi-th-large',
        items: [
          [
            {
              label: 'آرایشی',
              items: [{label: 'رژ لب'}, {label: 'کرم پودر'}, {label: 'ریمل'}, {label: 'لاک'}]
            },
          ],
          [
            {
              label: 'بهداشتی',
              items: [{label: 'ضد آفتاب'}, {label: 'مرطوب کننده'}, {label: 'ژل شست و شوی صورت'}]
            }
          ],
          [{
            label: 'بر اساس نوع پوست',
            items: [{label: 'خشک'}, {label: 'معمولی'}, {label: 'چرب'}]
          }

          ]
        ]
      },
    ];
  }
}
