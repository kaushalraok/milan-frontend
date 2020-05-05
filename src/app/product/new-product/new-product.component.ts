import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/interface/Product';
import { HttpClientServiceService } from 'src/app/service/http-client-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productForm: FormGroup;
  product: Product = new Product();
  constructor(private service: HttpClientServiceService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  formControl() {
    this.productForm = new FormGroup({
      productName: new FormControl(''),
      productDescription1: new FormControl(''),
      productPrice: new FormControl(''),
      numberOfPiecePerCase: new FormControl(''),
      productMRP: new FormControl('')
    })
  }
  addProduct() {
    this.service.addProduct(this.product).subscribe(response => {
      console.log(response);
      if (response) {
        this.router.navigateByUrl('listProduct');
      }
    })
  }

}
