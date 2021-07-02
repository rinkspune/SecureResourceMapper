import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PaymentDetailModel } from './payment-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {


  constructor(private httpClient: HttpClient) { }
  //**************Variable Region */
  //#region Variable Region
  //Object
  formDataModelPD: PaymentDetailModel = new PaymentDetailModel();

  // Array
  listPaymentDetail !: PaymentDetailModel[];

  // Base URL
  readonly baseURL: string = 'http://localhost:23495/api/PaymentDetail';

  // messageString
  serviceMessage: string = '';
  //**************Variable Region end*/
  //#endregion

  //#region API Methods

  //***Get payment Details */     //***Refresh payment Detail */
  refreshList() {
    this.serviceMessage = '';//"refreshList called !! ";

    // debugger;
    this.httpClient.get(this.baseURL)
      .toPromise()
      .then(
        res => {
          this.listPaymentDetail = res as PaymentDetailModel[];
          this.serviceMessage = this.serviceMessage + " and " + "receive Data - ";
          this.serviceMessage = this.serviceMessage + " and " + JSON.stringify(res);
        },
        err => {
          console.log(err);
          // if (err.status == 0)
          this.serviceMessage = this.serviceMessage + " and " + "Error Data - ";

          this.serviceMessage = this.serviceMessage + " and " + '#Error: ' + JSON.stringify(err.message);
        }
      );
  }



  //***Save payment Detail */
  postPaymentDeail() {
    // debugger;
    return this.httpClient.post(this.baseURL, this.formDataModelPD);
  }

  //***Update payment Detail */
  putPaymentDeail(rowIDPD: number) {
    return this.httpClient.put(`${this.baseURL}/${rowIDPD}`, this.formDataModelPD);
  }

  //***Remove payment Detail */
  onDeletingPD(pdRowID: number) {
    return this.httpClient.delete(`${this.baseURL}/${pdRowID}`);
  }

  //#endregion

}
