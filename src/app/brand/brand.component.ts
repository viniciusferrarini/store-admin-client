import {Component} from '@angular/core';
import {Brand} from "./brand";
import {CrudController} from "../service/crud.controller";
import {BrandService} from "./brand.service";
import {MensagemService} from "../growl/mensagem.service";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent extends CrudController<Brand, number> {

  constructor(brandService: BrandService, mensagemService: MensagemService) {
    super(brandService, mensagemService, Brand);
  }

}
