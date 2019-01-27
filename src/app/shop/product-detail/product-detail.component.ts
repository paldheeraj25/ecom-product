import { Component, OnInit } from '@angular/core';
import { BurnerService } from '../providers/burner.service';
import { Router } from '@angular/router';

import values from 'lodash/values';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  image: string;
  quantity: number = 1;
  gallery: Array<string> = [];
  product: any = {};
  totalPrice: number = 0;
  constructor(private burnerService: BurnerService, private router: Router) { }

  ngOnInit() {
    this.burnerService.getProduct("burnerDetail-1").subscribe(result => {
      this.product = result;
      this.image = result.image;
      this.gallery = values(result.gallery);
      this.totalPrice = this.product.price;
    })
  }

  changeImage(img: string) {
    this.image = img;
  }

  changePrice() {
    if (this.quantity < 0) {
      this.quantity = 0;
    }
    this.totalPrice = this.product.price * this.quantity;
  }

  goToPayment() {
    this.router.navigate(['/shop/payment-info']);
  }

}
