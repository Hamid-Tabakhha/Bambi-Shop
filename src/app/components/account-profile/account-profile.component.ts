import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../_services/auth.service';

interface State {
  name: string;
}

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.scss']
})


export class AccountProfileComponent implements OnInit {

  formShopConfirm: any = {
    api_token:null,
    fname: null,
    lname: null,
    phone_number: null,
    province: null,
    city: null,
    postcode: null,
    address: null,
  };

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }




  nameFormControl = new FormControl('', [
    Validators.required,
  ]);
  fnameFormControl = new FormControl('', [
    Validators.required,
  ]);
  cityFormControl = new FormControl('', [
    Validators.required,
  ]);
  zipcodeFormControl = new FormControl('', [
    Validators.required,
    Validators.max(10),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
  ;
  addressFormControl = new FormControl('', [
    Validators.required,
  ]);
  stateControl = new FormControl('', Validators.required);
  phoneNumberFormControl = new FormControl('', [
    Validators.required,
    Validators.max(11),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
  ;

  states: State[] = [
    {name: 'آذربایجان شرقی'},
    {name: 'آذربایجان غربی'},
    {name: 'اردبیل'},
    {name: 'اصفهان'},
    {name: 'البرز'},
    {name: 'ایلام'},
    {name: 'بوشهر'},
    {name: 'تهران'},
    {name: 'چهارمحال و بختیاری'},
    {name: 'خراسان جنوبی'},
    {name: 'خراسان شمالی'},
    {name: 'خراسان رضوی'},
    {name: 'خوزستان'},
    {name: 'زنجان'},
    {name: 'سمنان'},
    {name: 'سیستان و بلوچستان'},
    {name: 'فارس'},
    {name: 'قزوین'},
    {name: 'قم'},
    {name: 'کردستان'},
    {name: 'کرمان'},
    {name: 'کرمانشاه'},
    {name: 'کهگیلویه و بویراحمد'},
    {name: 'گلستان'},
    {name: 'گیلان'},
    {name: 'لرستان'},
    {name: 'مازندران'},
    {name: 'مرکزی'},
    {name: 'هرمزگان'},
    {name: 'همدان'},
    {name: 'یزد'},
  ];



}
