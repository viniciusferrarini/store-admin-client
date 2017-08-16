import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GrowlModule} from "primeng/primeng";
import {MensagemComponent} from "./mensagem.component";

@NgModule({
  imports: [
    CommonModule,
    GrowlModule
  ],
  declarations: [MensagemComponent],
  exports: [MensagemComponent]
})
export class MensagemModule { }
