import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule, DataTableModule, DialogModule, InputTextModule, SharedModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {ModelComponent} from "./model.component";
import {ModelService} from "./model.service";
import {SubCategoryService} from "../sub-category/sub-category.service";
import {DropdownModule} from "primeng/components/dropdown/dropdown";

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    DropdownModule
  ],
  declarations: [ModelComponent],
  exports: [ModelComponent],
  providers: [ModelService, SubCategoryService]
})
export class ModelModule { }
