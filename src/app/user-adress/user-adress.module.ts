import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule, DataTableModule, DialogModule, InputTextModule, SharedModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {UserAdressComponent} from "./user-adress.component";
import {UserAdressService} from "./user-adress.service";

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    InputTextModule,
    FormsModule
  ],
  declarations: [UserAdressComponent],
  exports: [UserAdressComponent],
  providers: [UserAdressService]
})
export class UserAdressModule { }
