import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

const AUTH_API = environment.baseURL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'api/sign-in', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, password_confirmation: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'api/sign-up', {
      username,
      password,
      password_confirmation
    }, httpOptions);
  }
}
