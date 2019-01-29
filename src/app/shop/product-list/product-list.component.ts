import { Component, OnInit } from '@angular/core';
import { Products } from './products-list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = Products;
  constructor(private router: Router) {
    console.log(this.products);
  }

  ngOnInit() {
  }

  goToDetailsPage(product) {
    console.log(product);
    this.router.navigate(['shop', 'detail']);
  }

}
