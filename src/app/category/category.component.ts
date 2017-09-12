import {Component} from '@angular/core';
import {Category} from "./category";
import {CrudController} from "../service/crud.controller";
import {CategoryService} from "./category.service";

@Component({
  moduleId: module.id,
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends CrudController<Category, number>{

  constructor(categoryService: CategoryService) {
    super(categoryService, Category);
  }

}
