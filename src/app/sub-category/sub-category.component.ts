import {Component, OnInit} from '@angular/core';
import {CrudController} from "../service/crud.controller";
import {SubCategory} from "./sub-category";
import {SubCategoryService} from "./sub-category.service";
import {CategoryService} from "../category/category.service";
import {SelectItem} from "../dto/select.item";

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent extends CrudController<SubCategory, number> implements OnInit {

  selectItemList: SelectItem[] = [];

  constructor(subCategoryService: SubCategoryService, private categoryService: CategoryService) {
    super(subCategoryService, SubCategory);
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
