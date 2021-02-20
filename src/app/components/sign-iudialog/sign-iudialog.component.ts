import {Component, Inject, OnInit, Input,Output, EventEmitter} from '@angular/core';
import {NavbarComponent} from 'src/app/components/navbar/navbar.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../_services/auth.service';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-sing-iudialog',
  templateUrl: './sign-iudialog.component.html',
  styleUrls: ['./sign-iudialog.component.scss']
})
export class SignIudialogComponent implements OnInit {
  formSignUp: any = {
    username: null,
    password: null,
    password_confirmation: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  message = '';
  @Input() flag =false;
  username:null;

  formSignIn: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

  hide = true;
  lpasswordFormControl = new FormControl('', [
    Validators.required,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  repasswordFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: NavbarComponent, private authService: AuthService, private tokenStorage: TokenStorageService, ) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.flag = this.tokenStorage.getFlag();
  }

  onSubmitSignUp(): void {
    const {username, password, password_confirmation} = this.formSignUp;

    this.authService.register(username, password_confirmation, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.tokenStorage.saveFlag(data.flag);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.username);
        this.reloadPage();
      },
      err => {
        this.message = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  onSubmitSignIn(): void {
    const {username, password} = this.formSignIn;
    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveFlag(data.flag);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.username);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
        this.flag = true;
      },
      err => {
        this.message = err.error.message;
        this.isLoginFailed = true;
      }

    );

  }

  reloadPage(): void {
    window.location.reload();
  }

}
