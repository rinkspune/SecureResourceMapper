import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailModel } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service: PaymentDetailService,
    public toast: ToastrService) { }

  ngOnInit(): void {
  }


  //#region Methods


  resetForm(pdForm: NgForm) {
    pdForm.form.reset();
    this.service.formDataModelPD = new PaymentDetailModel();
  }


  // onSubmit
  onSubmit(pdForm: NgForm) {
    if (this.service.formDataModelPD.paymentDetailId == 0)
      this.insertPDRow(pdForm);
    else
      this.updatePDRow(pdForm);
  }


  // insertPDRow
  insertPDRow(pdForm: NgForm) {
    this.service.postPaymentDeail()
      .subscribe(
        res => {
          this.resetForm(pdForm);
          this.service.refreshList();
          this.toast.success('Payment Detail has been saved successfully', 'Payment Detail Registration');
        },
        err => {
          console.log(err);
          this.toast.error("#Error: " + err.message, 'Error from api');
        }
      );
  }

  // updatePDRow
  updatePDRow(pdForm: NgForm) {
    this.service.putPaymentDeail(this.service.formDataModelPD.paymentDetailId)
      .subscribe(
        res => {
          this.resetForm(pdForm);
          this.service.refreshList();
          this.toast.info('Payment Detail has been updated successfully', 'Payment Detail Registration');
        },
        err => {
          console.log(err);
          this.toast.error("#Error: " + err.message, 'Error from api');
        }
      );
  }





  //#endregion


}
