import { Component, OnInit } from '@angular/core';
import {CrudController} from "../service/crud.controller";
import {Product} from "./product";
import {ProductService} from "./product.service";
import {MensagemService} from "../growl/mensagem.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends CrudController<Product, number> implements OnInit {

  constructor(productService: ProductService, mensagemService: MensagemService) {
    super(productService, mensagemService, Product);
  }

  ngOnInit() {
  }

}
