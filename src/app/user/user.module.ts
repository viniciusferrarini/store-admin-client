import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule, DataTableModule, DialogModule, InputTextModule, SharedModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {UserComponent} from "./user.component";
import {UserService} from "./user.service";

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
  declarations: [UserComponent],
  exports: [UserComponent],
  providers: [UserService]
})
export class UserModule { }
