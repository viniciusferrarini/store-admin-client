import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuyComponent} from "./buy.component";
import {BuyService} from "./buy.service";
import {ButtonModule, DataTableModule, DialogModule, GrowlModule, InputTextModule, SharedModule} from "primeng/primeng";
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
    GrowlModule
  ],
  declarations: [BuyComponent],
  exports: [BuyComponent],
  providers: [BuyService]
})
export class BuyModule { }
