import { Component, OnInit } from '@angular/core';
import { BurnerService } from '../providers/burner.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-paymment-form',
  templateUrl: './paymment-form.component.html',
  styleUrls: ['./paymment-form.component.scss']
})
export class PaymmentFormComponent implements OnInit {
  name: string = '';
  phone: string = '';
  address: string = '';
  email: string = '';
  address2: string = '';
  state: string = '';
  zip: string = '';

  constructor(private burnerService: BurnerService, private router: Router) { }

  ngOnInit() {
  }

  openPayment() {
    this.burnerService.cart.name = this.name;
    this.burnerService.cart.phone = this.phone;
    this.burnerService.cart.email = this.email;
    this.burnerService.cart.address = this.address + ' ' + this.address2 + ' ' + ' ' + this.state + ' ' + this.zip;
    this.burnerService.getPaymentUrl(this.burnerService.cart).subscribe(result => {
      window.location.href = result.payment_request.longurl;
    });
  }

  cashOnDelivery() {
    this.burnerService.cart.name = this.name;
    this.burnerService.cart.phone = this.phone;
    this.burnerService.cart.email = this.email;
    this.burnerService.cart.address = this.address + ' ' + this.address2 + ' ' + ' ' + this.state + ' ' + this.zip;
    this.burnerService.cart.paymentType = "cod";
    this.burnerService.getPaymentUrl(this.burnerService.cart).subscribe(result => {
      let navigationExtras: NavigationExtras = {
        queryParams: { "payment_id": result.key, payment_request_id: result.key }
      };
      this.router.navigate(['/shop/payment-notice'], navigationExtras);
    });
  }

}
