import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignIudialogComponent} from 'src/app/components/sign-iudialog/sign-iudialog.component';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: any;
  isShowing = false;
  iconing = false;
  flag;
  value = '';
  // tslint:disable-next-line:variable-name
  public menu_icon = 'menu';
  public account_icon = 'home'

  constructor(public dialog: MatDialog,private token: TokenStorageService) {
  }


  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.flag = this.token.getFlag();
  }

  signOut(): void {
    window.sessionStorage.clear();
    this.reloadPage();
  }

  // tslint:disable-next-line:typedef
  toggleSidenav() {
    if (this.iconing === true) {
      this.iconing = false;
      this.menu_icon = 'menu';
    } else {
      this.iconing = true;
      this.menu_icon = 'keyboard_arrow_right';
    }
    this.isShowing = !this.isShowing;
  }


  // tslint:disable-next-line:typedef
  // clickSignDialog() {
  //   this.isShowingSign = true;
  // }




  openDialog(): void {
    this.dialog.open(SignIudialogComponent, {});
  }

  reloadPage(): void {
    window.location.reload();
  }

}





