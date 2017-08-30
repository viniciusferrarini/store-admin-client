import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ButtonModule,
  DataTableModule,
  DialogModule, DropdownModule,
  GrowlModule,
  InputTextareaModule,
  InputTextModule,
  SharedModule
} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {ProductComponent} from "./product.component";
import {ProductService} from "./product.service";
import {PickListModule} from "primeng/components/picklist/picklist";
import {ModelService} from "../model/model.service";

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
    InputTextareaModule,
    PickListModule,
    DropdownModule
  ],
  declarations: [ProductComponent],
  exports: [ProductComponent],
  providers: [ProductService, ModelService]
})
export class ProductModule { }
