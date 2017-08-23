import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ButtonModule,
  DataTableModule,
  DialogModule,
  DropdownModule,
  GrowlModule,
  InputTextModule,
  SharedModule
} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {SubCategoryComponent} from "./sub-category.component";
import {SubCategoryService} from "./sub-category.service";
import {CategoryService} from "../category/category.service";

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
    DropdownModule
  ],
  declarations: [SubCategoryComponent],
  exports: [SubCategoryComponent],
  providers: [SubCategoryService, CategoryService]
})
export class SubCategoryModule { }
