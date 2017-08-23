import {Component, OnInit} from '@angular/core';
import {CrudController} from "../service/crud.controller";
import {SubCategory} from "./sub-category";
import {SubCategoryService} from "./sub-category.service";
import {MensagemService} from "../growl/mensagem.service";
import {Category} from "../category/category";
import {CategoryService} from "../category/category.service";

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent extends CrudController<SubCategory, number> implements OnInit {

  categoryList: Category[] = [];

  constructor(subCategoryService: SubCategoryService, mensagemService: MensagemService, private categoryService: CategoryService) {
    super(subCategoryService, mensagemService, SubCategory);
  }

  ngOnInit() {
    this.categoryService.findAll().subscribe(res => {this.categoryList = res});
    console.log(this.categoryList);
  }

}
