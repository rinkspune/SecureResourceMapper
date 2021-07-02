import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";


import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";

import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { FormsModule } from '@angular/forms';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';



@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent,
    ResourceDetailComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'resourcedetail', component: ResourceDetailComponent },
      { path: 'paymentdetail', component: PaymentDetailsComponent }
    ]),
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        timeOut: 8000,
        positionClass: 'toast-top-left',
        preventDuplicates: true,
        countDuplicates: true,
        progressBar: true
      }
    ),
  ],
  exports: [RouterModule],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
