import {Component, Inject} from '@angular/core';
import {NavbarComponent} from 'src/app/components/navbar/navbar.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sing-iudialog',
  templateUrl: './sign-iudialog.component.html',
  styleUrls: ['./sign-iudialog.component.scss']
})
export class SignIudialogComponent {

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
    public data: NavbarComponent) {
  }


}
