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

  host: string = "http://pinnacle.lewiot.com:5012";
  detailUrl: string = this.host + "/api/products/backflow-burder/detail";
  public cart: any;

  constructor(private httpClient: HttpClient) { }

  getProduct(id: string): Observable<any> {
    const params = new HttpParams().set('id', id);

    return this.httpClient.get(this.detailUrl, { params });
  }
}
