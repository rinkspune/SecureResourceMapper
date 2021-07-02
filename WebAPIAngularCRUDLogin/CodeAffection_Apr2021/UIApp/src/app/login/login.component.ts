import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    const credentials = {
      'username': form.value.username,
      'password': form.value.password
    }

    this.http.post('http://localhost:23495/api/ResourceDetail/login', credentials)
      .subscribe(resp => {
        const token = (<any>resp).token;
        localStorage.setItem('jwt', token);

        this.invalidLogin = false;
        this.router.navigate(["/"]);
      },
        err => {
          this.invalidLogin = true;
          console.log('jwt token value: ' + localStorage.getItem('jwt'));
          // localStorage.removeItem('jwt');
        });
  }
}
