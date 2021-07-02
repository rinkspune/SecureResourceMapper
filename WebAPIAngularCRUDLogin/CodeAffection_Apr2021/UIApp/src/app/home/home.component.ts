import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateUserService } from '../shared/auth/authenticate-user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public authUserSrv: AuthenticateUserService) { }

  ngOnInit(): void {
  }


  // isUserAuthenticated() {
  //   const token: string = localStorage.getItem('jwt') || '';
  //   return token != '' ? true : false;
  // }

  // logOut() {
  //   console.log('#logOut Method call# jwt token value before removing: ' + localStorage.getItem('jwt'));
  //   localStorage.removeItem('jwt');
  // }

}
