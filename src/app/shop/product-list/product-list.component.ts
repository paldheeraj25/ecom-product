import { Component, OnInit } from '@angular/core';
import { Products } from './products-list.model';
import { Router } from '@angular/router';
import { BurnerService } from '../providers/burner.service';
import values from 'lodash/values';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any = [];
  constructor(private router: Router, private burnerService: BurnerService) {
  }

  ngOnInit() {
    this.burnerService.getBurnerList().subscribe(result => {
      console.log(values(result));
      this.products = values(result);
    })
  }

  goToDetailsPage(id) {
    this.router.navigate(['shop', 'detail', id]);
  }

}
