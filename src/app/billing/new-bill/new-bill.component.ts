import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/Product';
import { HttpClientServiceService } from 'src/app/service/http-client-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Products } from './state';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {
  productForm: FormGroup;
  groups: any;
  i: any;
  numberOfBox: number;
  productPrice: any;
  totalAmount: any;
  grandTotal: any;
  productList: Product[] = [];
  newproduct: Product = new Product();
  numberOfPiece: any;
  constructor(private service: HttpClientServiceService) {
  }
  fieldArray: Array<Products> = [];
  newAttribute: Products = new Products();
  newDynamic: any = {};
  ngOnInit(): void {
    this.totalAmount = 0;
    this.newAttribute.numberOfBox = 0;
    this.newAttribute.numberOfPiece = 0;
    this.grandTotal = 0;
    this.get();
    this.formControl();
  }
  get() {
    this.service.getAllProduct().subscribe(data => {
      this.productList = data;
    })
  }
  formControl() {
    this.productForm = new FormGroup({
      productName: new FormControl(''),
      productPrice: new FormControl(''),
      numberOfBox: new FormControl(''),
      totalAmount: new FormControl(''),
    })
  }
  get f() {
    return this.productForm.controls;
  }
  selected() {
    this.service.getProductById(this.productForm.value.productName).subscribe(data => {
      this.newproduct = data;
    })
  }
  focusOutFunction() {
    this.totalAmount = 0;
    this.totalAmount = this.totalAmount + (this.newproduct.productPrice * this.newAttribute.numberOfBox) + (this.newproduct.pricePerPiece * this.newAttribute.numberOfPiece);
  }
  focusOutFunction1() {
    this.totalAmount = 0;
    this.totalAmount = this.totalAmount + (this.newproduct.productPrice * this.newAttribute.numberOfBox) + (this.newproduct.pricePerPiece * this.newAttribute.numberOfPiece);
  }

  addFieldValue() {
    this.grandTotal = this.grandTotal + this.totalAmount;
    this.newAttribute.totalAmount = this.totalAmount;
    this.newAttribute.productName = this.newproduct.productName;
    this.newAttribute.productPrice = this.newproduct.productPrice;
    this.newDynamic = { productName: this.newAttribute.productName, productPrice: this.newAttribute.productPrice, numberOfBox: this.newAttribute.numberOfBox, numberOfPiece: this.newAttribute.numberOfPiece, totalAmount: this.newAttribute.totalAmount };
    this.fieldArray.push(this.newDynamic);
    this.totalAmount = 0;
    this.newAttribute.totalAmount = 0;
    this.newAttribute.productName = '';
    this.newAttribute.productPrice = 0;
    this.newAttribute.numberOfBox = 0;
    this.newAttribute.numberOfPiece = 0;
    this.newproduct.productPrice = 0;
  }

  deleteFieldValue(index) {
    this.newAttribute = this.fieldArray[index];
    console.log(this.newAttribute);
    this.grandTotal = this.grandTotal - this.newAttribute.totalAmount;
    this.fieldArray.splice(index, 1);
  }

}
