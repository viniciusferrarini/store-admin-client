import {Component, ViewContainerRef} from '@angular/core';
import {Category} from "./category";
import {CrudController} from "../service/crud.controller";
import {CategoryService} from "./category.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  moduleId: module.id,
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends CrudController<Category, number> {

  constructor(protected toastr: ToastsManager,
              protected vcr: ViewContainerRef,
              categoryService: CategoryService) {
    super(toastr, vcr, categoryService, Category);
  }

}
