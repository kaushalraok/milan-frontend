import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/Product';
import { Products } from '../billing/new-bill/state';

const GET_HEADERS = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }),
  responseType: 'Text' as 'json'
}
@Injectable({
  providedIn: 'root'
})
export class HttpClientServiceService {

  BASEURL: string = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<any> {
    return this.http.get(this.BASEURL);
  }

  getProductById(productId: number): Observable<any> {
    return this.http.get(this.BASEURL + '/' + productId);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.BASEURL + '/' + product.productId, product)
  }

  deleteProduct(product: Product): Observable<any> {
    return this.http.post(this.BASEURL + '/delete', product);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(this.BASEURL, product, GET_HEADERS);
  }

}
