import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignIudialogComponent} from 'src/app/components/sign-iudialog/sign-iudialog.component';
import {TokenStorageService} from '../../_services/token-storage.service';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {UserSheetComponent} from 'src/app/components/user-sheet/user-sheet.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {

  isShowing = false;
  iconing = false;
  value = '';
  // tslint:disable-next-line:variable-name
  public menu_icon = 'menu';
  public account_icon = 'home';
  loggedMessage = '';
  currentUser;

  constructor(public dialog: MatDialog, private token: TokenStorageService, private _bottomSheet: MatBottomSheet) {
  }


  ngOnInit(): void {

    this.currentUser = this.token.getUser();
    if (this.token.getFlag() == 'true') {
      this.account_icon = 'how_to_reg';
      this.loggedMessage = ':)  خوش اومدی ' + ' ' + this.token.getUser();
    } else {
      this.account_icon = 'person_add';
      this.loggedMessage = 'ورود / عضویت';
    }

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


  openDialog(): void {
    if (this.token.getFlag() == 'true') {
      this._bottomSheet.open(UserSheetComponent);
    } else {
      this.dialog.open(SignIudialogComponent, {});
    }
  }

}


