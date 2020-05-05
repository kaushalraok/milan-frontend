import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { NewBillComponent } from './billing/new-bill/new-bill.component';


const routes: Routes = [{ path: 'listProduct', component: ProductListComponent },
{ path: 'editProduct/:id', component: EditProductComponent },
{ path: 'newProduct', component: NewProductComponent },
{ path: 'billing', component: NewBillComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }