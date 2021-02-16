import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isOpenSN;

  showFiller = false;

  constructor() {
  }

  items: MenuItem[];

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-fw pi-home',
        style: 'p-slidemenu'
      },
      {
        label: '𝘼𝙖𝙘𝙘𝙤𝙪𝙣𝙩',
        icon: 'pi pi-fw pi-user',
        routerLink: '/account-profile'
      },
      {
        label: '𝘊𝒂𝒕𝒂𝒍𝒐𝒈𝒖𝒆',
        icon: 'pi pi-fw pi-th-large',
        items: [
          {
            label: '𝘉𝘺 𝘛𝘺𝘱𝘦',
            icon: 'pi pi-fw pi-user-plus',
            items: [{
              label: 'لوازم آرایشی',
              icon: '',
              items: [{
                label: 'رژ لب',
                icon: ''
              }, {
                label: 'کرم پودر',
                icon: ''
              }, {
                label: 'ریمل',
                icon: ''
              }, {
                label: 'لاک',
                icon: ''
              },
              ]
            }, {
              label: 'لوازم بهداشتی',
              icon: '',
              items: [{
                label: 'ضد آفتاب',
                icon: ''
              }, {
                label: 'مرطوب کننده',
                icon: ''
              }, {
                label: 'ژل شست و شوی صورت',
                icon: ''
              }]
            }]

          },
          {
            label: '𝘉𝘺 𝘚𝘬𝘪𝘯 𝘛𝘺𝘱𝘦',
            icon: 'pi pi-fw pi-user-minus',
            items: [{
              label: 'چرب',
              icon: ''
            }, {
              label: 'خشک',
              icon: ''
            }, {
              label: 'مختلط',
              icon: ''
            }]
          },
        ]
      }
    ];
  }
}
