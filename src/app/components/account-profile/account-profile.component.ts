import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface State {
  name: string;
}

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.scss']
})


export class AccountProfileComponent implements OnInit {
  stateControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
