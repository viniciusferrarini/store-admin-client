import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {CrudController} from "../service/crud.controller";
import {SubCategory} from "./sub-category";
import {SubCategoryService} from "./sub-category.service";
import {CategoryService} from "../category/category.service";
import {SelectItem} from "../entity/dto/select.item";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent extends CrudController<SubCategory, number> implements OnInit {

  selectItemList: SelectItem[] = [];

  constructor(protected toastr: ToastsManager,
              protected vcr: ViewContainerRef,
              subCategoryService: SubCategoryService,
              private categoryService: CategoryService) {
    super(toastr, vcr, subCategoryService, SubCategory);
    this.getSelectItemList();
  }

  getSelectItemList() {
    this.categoryService.get<any>().subscribe(res => {
      res.forEach(item => {
        this.selectItemList.push(new SelectItem({id: item.id, name: item.name}, item.name));
      });
    });
  }
}
