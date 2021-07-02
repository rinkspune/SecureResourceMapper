import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'PaymentApp03';

  isUserAuthenticated() {
    const token: string = localStorage.getItem('jwt') || '';
    return token != '' ? true : false;
  }

  logOut() {
    console.log('#logOut Method call# jwt token value before removing: ' + localStorage.getItem('jwt'));
    localStorage.removeItem('jwt');
  }
}
