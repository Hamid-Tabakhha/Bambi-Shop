import {Component, OnInit} from '@angular/core';
import {ShareServiceService} from '../../../Services/share-service.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-products-info-page',
  templateUrl: './products-info-page.component.html',
  styleUrls: ['./products-info-page.component.scss']
})
export class ProductsInfoPageComponent implements OnInit {

  constructor(private sharedService: ShareServiceService, private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute) {
  }

  productData = [];
  n: string;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getProductById(+params['id']);
    });

  }

  getProductById(id: number) {
    this.sharedService.getProductsById(id).subscribe(data => {
      this.productData = data;
      console.log(data)

    });
  }

  transform(base64img) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64img);
  }


}
