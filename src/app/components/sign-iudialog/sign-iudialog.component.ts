import {Component, OnInit, Input, Inject} from '@angular/core';
import {NavbarComponent} from 'src/app/components/navbar/navbar.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
export class SignIudialogComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: NavbarComponent) {
  }

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

}
