import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';
import {AuthService} from '../../_services/auth.service';
import {ShareServiceService} from '../../Services/share-service.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-user-sheet',
  templateUrl: './user-sheet.component.html',
  styleUrls: ['./user-sheet.component.scss']
})
export class UserSheetComponent implements OnInit {

  baskets = [];


  constructor(private sanitizer: DomSanitizer, private tokenStorage: TokenStorageService, private authService: AuthService, private sharedService: ShareServiceService) {
  }

  ngOnInit(): void {
    this.getShoppingList();
    this.sharedService.share.subscribe(x =>
      this.baskets = [x])
    console.log('this:');
    console.log(this.baskets);
  }

  getShoppingList() {
    this.sharedService.getShoppingList().subscribe(data => {
      console.log(data);
      this.baskets = data;
      console.log("kirrrrr");
    });
  }

  signOut(): void {
    window.sessionStorage.clear();
    this.authService.logout();
    this.reloadPage();
  }

  reloadPage(): void {
    window.location.reload();
  }

  logOut() {
    this.tokenStorage.signOut();
  }

  transform(base64img) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64img);
  }

}
