import {Component, OnInit} from '@angular/core';
import {CrudController} from "../service/crud.controller";
import {SubCategory} from "./sub-category";
import {SubCategoryService} from "./sub-category.service";
import {MensagemService} from "../growl/mensagem.service";
import {CategoryService} from "../category/category.service";
import {SelectItem} from "../dto/select.item";
import {LazyLoadEvent} from "primeng/primeng";

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent extends CrudController<SubCategory, number> implements OnInit {

  selectItemList: SelectItem[] = [];

  constructor(subCategoryService: SubCategoryService, mensagemService: MensagemService, private categoryService: CategoryService) {
    super(subCategoryService, mensagemService, SubCategory);
    this.getSelectItemList();
  }

  getSelectItemList() {
    this.categoryService.getTable().subscribe(res => {
      res.forEach(item => {
        this.selectItemList.push(new SelectItem({id: item.id, name: item.name}, item.name));
      });
    });
  }
}
