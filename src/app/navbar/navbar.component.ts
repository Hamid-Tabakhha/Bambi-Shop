import { Component, OnInit, } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  

  search = new FormControl();
  isShowing: boolean = false;
  iconing: boolean = false;

  public menu_icon = 'menu';

  constructor() { }

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
}
