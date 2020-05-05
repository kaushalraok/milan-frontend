import { Component, OnInit } from '@angular/core';
import { HttpClientServiceService } from 'src/app/service/http-client-service.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Product } from 'src/app/interface/Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[]=[];

  constructor(private service: HttpClientServiceService, private router: Router) { }

  ngOnInit() {
    this.initialization();
  }

  initialization() {
    this.productList = null;
    this.service.getAllProduct().subscribe(data => {
      this.productList = data;
    })
  }

  deleteProduct(value) {
    this.service.deleteProduct(value).subscribe(data => {
      this.initialization();
    });
  }

}
