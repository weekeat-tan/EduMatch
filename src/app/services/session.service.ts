import { Injectable } from '@angular/core';

import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setToken(token: string) {
    sessionStorage.token = token;
  }

  getToken(): string {
    return sessionStorage.token;
  }

  setIsLogin(isLogin: boolean) {
    sessionStorage.isLogin = isLogin;
  }

  getIsLogin(): boolean {
    return sessionStorage.isLogin;
  }
}
