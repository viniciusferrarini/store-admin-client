import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ButtonModule,
  DataTableModule,
  DialogModule,
  GrowlModule,
  InputTextareaModule,
  InputTextModule,
  SharedModule
} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {ProductComponent} from "./product.component";
import {ProductService} from "./product.service";

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    GrowlModule,
    InputTextareaModule
  ],
  declarations: [ProductComponent],
  exports: [ProductComponent],
  providers: [ProductService]
})
export class ProductModule { }
