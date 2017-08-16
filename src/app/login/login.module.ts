import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule, EmailValidator} from "@angular/forms";
import {GrowlModule, PasswordModule} from "primeng/primeng";

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GrowlModule,
    PasswordModule,
    EmailValidator
  ]
})
export class LoginModule {

}
