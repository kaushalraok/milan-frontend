import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientServiceService } from 'src/app/service/http-client-service.service';
import { Product } from 'src/app/interface/Product';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  activatedroute: any;
  productID: number;
  productForm: FormGroup;
  product: Product = new Product();
  constructor(private service: HttpClientServiceService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.productID = this.route.snapshot.params.id;
    this.service.getProductById(this.productID).subscribe(data => {
      this.product = data;
    })
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
  productUpdate() {
    this.service.updateProduct(this.product).subscribe(data => {
      console.log(data);
      if (data == 1) {
        this.router.navigateByUrl('listProduct');
      }
    })
  }


}
