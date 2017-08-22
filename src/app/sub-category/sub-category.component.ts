import { Component, OnInit } from '@angular/core';
import {CrudController} from "../service/crud.controller";
import {SubCategory} from "./sub-category";
import {SubCategoryService} from "./sub-category.service";
import {MensagemService} from "../growl/mensagem.service";

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent extends CrudController<SubCategory, number> implements OnInit {

  constructor(subCategoryService: SubCategoryService, mensagemService: MensagemService) {
    super(subCategoryService, mensagemService, SubCategory);
  }

  ngOnInit() {
  }

}
