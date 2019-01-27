import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymment-form',
  templateUrl: './paymment-form.component.html',
  styleUrls: ['./paymment-form.component.scss']
})
export class PaymmentFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openPayment() {
    console.log('payment done');
  }

}
