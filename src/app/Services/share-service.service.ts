import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {TokenStorageService} from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})


export class ShareServiceService {
  // product: Product;
  constructor(private http: HttpClient, private token: TokenStorageService) {
  }


  getProducts(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(environment.baseURL + 'api/category', {headers: headers});
  }

  getShoppingList(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.post(environment.baseURL + 'api/show-cart', {headers: headers, username: this.token.getUser()});
  }

  getProductsById(id: number): Observable<any> {
    const url = `${environment.baseURL + 'api/product'}/${id}`;
    return this.http.get<any>(url).pipe();
  }

  getMascaraProducts(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(environment.baseURL + 'api/category/mascara', {headers: headers});
  }

  getCreamProducts(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(environment.baseURL + 'api/category/cream', {headers: headers});
  }

  getNailpolishProducts(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(environment.baseURL + 'api/category/nailpolish', {headers: headers});
  }

  getSunscreamProducts(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(environment.baseURL + 'api/category/sunscream', {headers: headers});
  }

  getLotionProducts(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(environment.baseURL + 'api/category/lotion', {headers: headers});
  }

  getFacewashProducts(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(environment.baseURL + 'api/category/facewash', {headers: headers});
  }

  getoilyProducts(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(environment.baseURL + 'api/skin/oily', {headers: headers});
  }

  getLipstickProducts(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(environment.baseURL + 'api/category/lipstick', {headers: headers});
  }

  getDryProducts(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(environment.baseURL + 'api/skin/dry', {headers: headers});
  }

  getNormalProducts(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(environment.baseURL + 'api/skin/normal', {headers: headers});
  }

  addToCart(productId) {
    console.log(productId);
    return this.http.post(environment.baseURL + 'api/add-cart', {
      username: this.token.getUser(),
      product_id: productId
    });
  }
}
