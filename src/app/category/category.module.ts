import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryComponent} from "./category.component";
import {CategoryService} from "./category.service";
import {
  ButtonModule, DataTableModule, DialogModule, DropdownModule, GrowlModule, InputTextModule,
  SharedModule
} from "primeng/primeng";
import {FormsModule} from "@angular/forms";

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
  declarations: [CategoryComponent],
  exports: [CategoryComponent],
  providers: [CategoryService]
})
export class CategoryModule { }
