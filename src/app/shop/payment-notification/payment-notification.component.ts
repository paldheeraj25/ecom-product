import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators'
import { BurnerService } from '../providers/burner.service';

@Component({
  selector: 'app-payment-notification',
  templateUrl: './payment-notification.component.html',
  styleUrls: ['./payment-notification.component.scss']
})
export class PaymentNotificationComponent implements OnInit {

  orderId: string = '';
  name: string = '';
  address: string = '';
  email: string = '';
  item: string = '';
  price: string = '';
  date: string = '';

  constructor(private route: ActivatedRoute, private burnerService: BurnerService) { }

  ngOnInit() {
    this.route.queryParams
      .pipe(filter(params => Object.keys(params).length > 0 === window.location.href.includes('payment_id')))
      .subscribe(params => {
        this.burnerService.getOrderDetail({ order_id: params['payment_request_id'] }).subscribe(result => {
          console.log(result.order_detail)
          this.name = result.order_detail['name'];
          this.address = result.order_detail['address'];
          this.item = result.order_detail['item'];
          this.email = result.order_detail['email'];
          this.price = result.order_detail['price'];
          this.date = result.order_date;
          this.orderId = params['payment_request_id']

        });
        //payment_request_id=
        // todo 1: change 'test' to data from bot and db.

      });
  }

}
