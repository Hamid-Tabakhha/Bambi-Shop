import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const FLAG_KEY = 'auth-flag';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
    this.reloadPage();
  }
  reloadPage(): void {
    window.location.reload();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem (TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

    public saveUser(username: string): void {
      window.sessionStorage.removeItem(USER_KEY);
      window.sessionStorage.setItem(USER_KEY, username);
    }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return sessionStorage.getItem(USER_KEY);
    }

    return {};
  }

  public saveFlag(flag: any): void {
    window.sessionStorage.removeItem(FLAG_KEY);
    window.sessionStorage.setItem (FLAG_KEY, flag);
  }

  public getFlag(): any{
    return sessionStorage.getItem(FLAG_KEY);
  }



}
