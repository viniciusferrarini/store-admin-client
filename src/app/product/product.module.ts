import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ButtonModule,
  DataTableModule,
  DialogModule,
  DropdownModule,
  FileUploadModule,
  GrowlModule,
  InputTextareaModule,
  InputTextModule,
  SharedModule
} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {ProductComponent} from "./product.component";
import {ProductService} from "./product.service";
import {PickListModule} from "primeng/components/picklist/picklist";
import {ProductGalleryService} from "../product-gallery/product-gallery.service";
import {CurrencyMaskModule} from "ng2-currency-mask";

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
    DropdownModule,
    FileUploadModule,
    CurrencyMaskModule
  ],
  declarations: [ProductComponent],
  exports: [ProductComponent],
  providers: [ProductService, ProductGalleryService]
})
export class ProductModule { }
