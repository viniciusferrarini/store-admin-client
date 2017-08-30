import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrandComponent} from "./brand.component";
import {BrandService} from "./brand.service";
import {ButtonModule, DataTableModule, DialogModule, GrowlModule, InputTextModule, SharedModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {SubCategoryService} from "../sub-category/sub-category.service";

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    GrowlModule
  ],
  declarations: [BrandComponent],
  exports: [BrandComponent],
  providers: [BrandService, SubCategoryService]
})
export class BrandModule { }
