import { Component, OnInit } from '@angular/core';
import {ShareServiceService} from '../../Services/share-service.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  baskets = [];

  constructor(private sharedService: ShareServiceService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getShoppingList();
  }

  getShoppingList() {
    this.sharedService.getShoppingList().subscribe(data => {
      this.baskets = data;
      console.log("test");
      console.log(this.baskets);
    });
  }

  transform(base64img) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64img);
  }

}
