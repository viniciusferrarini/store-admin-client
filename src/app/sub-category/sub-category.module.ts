import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule, DataTableModule, DialogModule, GrowlModule, InputTextModule, SharedModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {SubCategoryComponent} from "./sub-category.component";
import {SubCategoryService} from "./sub-category.service";

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
  declarations: [SubCategoryComponent],
  exports: [SubCategoryComponent],
  providers: [SubCategoryService]
})
export class SubCategoryModule { }
