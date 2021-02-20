import {Component, OnInit} from '@angular/core';
import {MegaMenuItem} from 'primeng/api';
import {ShareServiceService} from '../../Services/share-service.service';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  constructor(private sharedService: ShareServiceService, private sanitizer: DomSanitizer) {
  }

  products = [];
  action = false;
  isShowingCategory : string;

  items: MegaMenuItem[];

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getProduct();
    this.items = [
      {
        label: 'دسته بندی محصولات' , icon: 'pi pi-fw pi-th-large',
        items: [
          [{
            label: '',
            items: [{label: 'همه محصولات', command: event => this.getProduct()}]
          }],
          [
            {
              label: 'آرایشی',
              items: [{label: 'رژ لب', command: event => this.getLipstickProduct()}, {
                label: 'کرم پودر',
                command: event => this.getCreamProduct() ,
              }, {label: 'ریمل', command: event => this.getMascaraProduct()}, {label: 'لاک', command: event => this.getNailpolishProduct()}]
            },
          ],
          [
            {
              label: 'بهداشتی',
              items: [{label: 'ضد آفتاب', command: event => this.getSunscreamProduct()}, {
                label: 'مرطوب کننده',
                command: event => this.getLotionProduct()
              }, {label: 'ژل شست و شوی صورت', command: event => this.getFacewashProduct()}]
            }
          ],
          [{
            label: 'بر اساس نوع پوست',
            items: [{label: 'خشک', command: event => this.getDryProduct()}, {
              label: 'معمولی',
              command: event => this.getNormalProduct()
            }, {label: 'چرب', command: event => this.getoilyProduct()}]
          }

          ]
        ]
      },
    ];
  }

  getName(label:string){
    this.isShowingCategory = label;
  }

  getProduct() {
    this.sharedService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

  getMascaraProduct() {
    this.sharedService.getMascaraProducts().subscribe(data => {
      this.products = data;
    });
  }

  getLipstickProduct() {
    this.sharedService.getLipstickProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

  getCreamProduct() {
    this.sharedService.getCreamProducts().subscribe(data => {
      this.products = data;
    });
  }

  getNailpolishProduct() {
    this.sharedService.getNailpolishProducts().subscribe(data => {
      this.products = data;
    });
  }

  getSunscreamProduct() {
    this.sharedService.getSunscreamProducts().subscribe(data => {
      this.products = data;
    });
  }

  getLotionProduct() {
    this.sharedService.getLotionProducts().subscribe(data => {
      this.products = data;
    });
  }

  getFacewashProduct() {
    this.sharedService.getFacewashProducts().subscribe(data => {
      this.products = data;
    });
  }

  getoilyProduct() {
    this.sharedService.getoilyProducts().subscribe(data => {
      this.products = data;
    });
  }

  getDryProduct() {
    this.sharedService.getDryProducts().subscribe(data => {
      this.products = data;
    });
  }

  getNormalProduct() {
    this.sharedService.getNormalProducts().subscribe(data => {
      this.products = data;
    });
  }

  transform(base64img) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64img);
  }
}
