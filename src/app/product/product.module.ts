import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ProductComponent} from "./product.component";

@NgModule({
  declarations: [ProductComponent],
  exports: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductModule {

}
