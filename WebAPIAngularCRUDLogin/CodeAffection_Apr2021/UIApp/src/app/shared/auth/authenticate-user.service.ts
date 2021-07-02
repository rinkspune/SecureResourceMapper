import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  constructor() { }


  public isUserAuthenticated() {
    const token: string = localStorage.getItem('jwt') || '';
    return token != '' ? true : false;
  }

  public logOut() {
    console.log('#logOut Method call# jwt token value before removing: ' + localStorage.getItem('jwt'));
    localStorage.removeItem('jwt');
  }
}
