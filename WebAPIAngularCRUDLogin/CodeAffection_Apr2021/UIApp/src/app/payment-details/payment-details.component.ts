import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailModel } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [`
    .my-custom-width {
      height: 300px;
      overflow: auto;
      }
  `
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService,
    private toast: ToastrService) { }
  private apiMsg: string = '';

  ngOnInit(): void {
    this.service.refreshList();
    if(this.service.serviceMessage !='')
    this.toast.error(this.service.serviceMessage, 'Refresh List Payment Detail');

    // alert(JSON.stringify(this.service.serviceMessage));
    /*
    if (this.service.serviceMessage.status == 0)
      this.apiMsg = 'there is no response from API';
  */
  }
  // ngAfterContentChecked() {
  //   alert('ngAfterContentChecked called');
  //   this.getServiceMessageDemo(this.service.serviceMessage);

  // }

  getServiceMessageDemo(msg: string) {
    this.toast.error(msg ? msg : 'Demo', 'Service Response');
  }

  getServiceMessage() {
    // debugger;
    if (this.service.serviceMessage)
      this.toast.error(this.service.serviceMessage, 'Service Response');
    // private msg : HttpResponse = this.service.serviceMessage; 
    // if (msg.prop(status == 0)
    //   this.apiMsg = 'there is no response from API';
  }

  onRowSelection(pdRow: PaymentDetailModel) {
    // this.toast.info('PaymentDetailModel: ' + JSON.stringify(PaymentDetailModel), 'onRowSelection called');
    this.toast.toastrConfig.preventDuplicates = false;
    this.toast.toastrConfig.countDuplicates = false;
    this.toast.toastrConfig.timeOut = 500;
    // this.toast.toastrConfig.positionClass="toast-top-center";
    this.toast.info('Selected row is available for modification', 'Payment Detail Model');
    this.service.formDataModelPD = Object.assign({}, pdRow);
  }

  onDeletingPD(pdRowID: number) {
    // this.service.formDataModelPD = new PaymentDetailModel();

    if (confirm("are you sure ? deleting Payment Detail?")) {
      this.service.onDeletingPD(pdRowID).subscribe(
        res => {
          // this.resetForm(pdForm);
          this.service.refreshList();
          this.toast.success('Payment Detail has been removed successfully', 'Payment Detail Deletion');
          //this.service.formDataModelPD.paymentDetailId = 0;
          this.service.formDataModelPD = new PaymentDetailModel();

        },
        err => {
          console.log(err);
          this.toast.error('#Error' + err.message, 'Payment Detail Deletion');
        }
      );
    }
  }
}
