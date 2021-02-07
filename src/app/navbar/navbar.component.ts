import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SingIUDialogComponent} from 'src/app/sing-iudialog/sing-iudialog.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {



  isShowing: boolean = false;
  isShowingSign: boolean = false;
  iconing: boolean = false;

  value = 'Clear me';
  public menu_icon = 'menu';

  ngOnInit(): void {
  }

  toggleSidenav() {
    if (this.iconing == true) {
      this.iconing = false;
      this.menu_icon = 'menu'
    }else{
      this.iconing = true;
      this.menu_icon = 'keyboard_arrow_right'
    }
    this.isShowing = !this.isShowing;
  }
  clickSignDialog(){
    this.isShowingSign = true;
  }


  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SingIUDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
