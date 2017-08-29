import { Component, OnInit } from '@angular/core';
import {CrudController} from "../service/crud.controller";
import {Model} from "./model";
import {ModelService} from "./model.service";
import {MensagemService} from "../growl/mensagem.service";
import {SelectItem} from "../dto/select.item";
import {SubCategoryService} from "../sub-category/sub-category.service";

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent extends CrudController<Model, number> {

  selectItemList: SelectItem[] = [];

  constructor(modelService: ModelService, mensagemService: MensagemService, private subCategoryService: SubCategoryService) {
    super(modelService, mensagemService, Model);
    this.getSelectItemList();
  }

  getSelectItemList() {
  this.subCategoryService.getTable().subscribe(res => {
    res.forEach(item => {
      this.selectItemList.push(new SelectItem({id: item.id, name: item.name}, item.name));
    });
  });
  }
}