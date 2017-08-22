import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule, DataTableModule, DialogModule, GrowlModule, InputTextModule, SharedModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {ModelComponent} from "./model.component";
import {ModelService} from "./model.service";

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
  declarations: [ModelComponent],
  exports: [ModelComponent],
  providers: [ModelService]
})
export class ModelModule { }
