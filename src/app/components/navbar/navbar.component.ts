import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignIudialogComponent} from 'src/app/components/sign-iudialog/sign-iudialog.component';

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

  ngOnInit(): void {
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


  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(SignIudialogComponent, {});
  }

}





