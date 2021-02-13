import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {ProductsComponent} from './components/products/products.component';
import {SingIUDialogComponent} from './components/sing-iudialog/sing-iudialog.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from './test/test.component';
import {SidebarCatalogueComponent} from './components/sidebar/sidebar-catalogue/sidebar-catalogue.component';
import {SidebarMainComponent} from './components/sidebar/sidebar-main/sidebar-main.component';
import {SidebarCatalogueTypeComponent} from './components/sidebar/sidebar-catalogue/sidebar-catalogue-type/sidebar-catalogue-type.component';
import {SidebarCatalogueSkintypeComponent} from './components/sidebar/sidebar-catalogue/sidebar-catalogue-skintype/sidebar-catalogue-skintype.component';
import {SidebarCatalogueTypeMakeupComponent} from './components/sidebar/sidebar-catalogue/sidebar-catalogue-type/sidebar-catalogue-type-makeup/sidebar-catalogue-type-makeup.component';
import {SidebarCatalogueTypeHealthComponent} from './components/sidebar/sidebar-catalogue/sidebar-catalogue-type/sidebar-catalogue-type-health/sidebar-catalogue-type-health.component';
import {MatCardModule} from '@angular/material/card';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';

const appRoutes: Routes = [
  {path: '', component: SidebarMainComponent},
  {path: 'sidebar/sidebar-catalogue', component: SidebarCatalogueComponent},
  {path: 'sidebar/sidebar-catalogue/sidebar-catalogue-type', component: SidebarCatalogueTypeComponent},
  {path: 'sidebar/sidebar-catalogue/sidebar-catalogue-type/sidebar-catalogue-type-makeup', component: SidebarCatalogueTypeMakeupComponent},
  {path: 'sidebar/sidebar-catalogue/sidebar-catalogue-type/sidebar-catalogue-type-health', component: SidebarCatalogueTypeHealthComponent},
  {path: 'sidebar/sidebar-catalogue/sidebar-catalogue-skintype', component: SidebarCatalogueSkintypeComponent},
  {path: '', component: ProductsComponent , outlet: 'products' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ProductsComponent,
    SingIUDialogComponent,
    TestComponent,
    SidebarCatalogueComponent,
    SidebarMainComponent,
    SidebarCatalogueTypeComponent,
    SidebarCatalogueSkintypeComponent,
    SidebarCatalogueTypeMakeupComponent,
    SidebarCatalogueTypeHealthComponent,
    AccountProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    TextFieldModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}, {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
