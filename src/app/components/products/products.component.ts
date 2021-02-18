import {Component, OnInit} from '@angular/core';
import {GettingProductDataService} from '../../Services/getting-product-data.service';
import {MegaMenuItem} from 'primeng/api';
import { ShareServiceService } from '../../Services/share-service.service';
import { DomSanitizer } from '@angular/platform-browser';

// tslint:disable-next-line:class-name
// export interface product {
//   name: string;
//   price: number;
//   company: string;
//   img: string;
//   desc: string;
// }

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [GettingProductDataService]
})
export class ProductsComponent implements OnInit {

  constructor(private sharedService: ShareServiceService, private sanitizer:DomSanitizer) {
  }
  products = [];
  action = false;


  items: MegaMenuItem[];
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getProduct();
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

  getProduct(){
    this.sharedService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  transform(base64img){
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64img)
  }
}
