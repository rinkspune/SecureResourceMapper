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


@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent,
    ResourceDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    HttpClientModule,

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
