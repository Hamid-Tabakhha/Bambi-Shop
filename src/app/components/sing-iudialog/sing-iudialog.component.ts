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
  templateUrl: './sing-iudialog.component.html',
  styleUrls: ['./sing-iudialog.component.scss']
})
export class SingIUDialogComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(
    public dialogRef: MatDialogRef<SingIUDialogComponent>, @Inject(MAT_DIALOG_DATA)
    public data: NavbarComponent) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

}
