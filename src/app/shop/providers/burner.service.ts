import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class BurnerService {

  // host: string = "https://greatshoppingdeals.in";
  // //host: string = "http://localhost:5012";
  // listUrl: string = this.host + "/api/products/backflow-burder/list";
  // detailUrl: string = this.host + "/api/products/backflow-burder/detail";
  // preparePaymentUrl: string = this.host + "/api/product/prepare-payment";
  // orderDetailUrl: string = this.host + "/api/product/get-order";

  //Below for production mode

  listUrl: string = "/api/products/backflow-burder/list";
  detailUrl: string = "/api/products/backflow-burder/detail";
  preparePaymentUrl: string = "/api/product/prepare-payment";
  orderDetailUrl: string = "/api/product/get-order";
  public cart: any = {};

  constructor(private httpClient: HttpClient) { }

  getProduct(id: string): Observable<any> {
    const params = new HttpParams().set('id', id);

    return this.httpClient.get(this.detailUrl, { params });
  }

  getPaymentUrl(data: any): Observable<any> {
    return this.httpClient.post(this.preparePaymentUrl, data);
  }

  getOrderDetail(data: any): Observable<any> {
    return this.httpClient.post(this.orderDetailUrl, data);
  }

  getBurnerList(): Observable<any> {
    return this.httpClient.get(this.listUrl);
  }
}
