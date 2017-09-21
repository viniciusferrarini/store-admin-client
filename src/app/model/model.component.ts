import {Component, ViewContainerRef} from '@angular/core';
import {CrudController} from "../service/crud.controller";
import {Model} from "./model";
import {ModelService} from "./model.service";
import {SelectItem} from "../entity/dto/select.item";
import {SubCategoryService} from "../sub-category/sub-category.service";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent extends CrudController<Model, number> {

  subCategoryList: SelectItem[] = [];

  constructor(protected toastr: ToastsManager,
              protected vcr: ViewContainerRef,
              modelService: ModelService,
              private subCategoryService: SubCategoryService) {
    super(toastr, vcr, modelService, Model);
    this.getSubCategoryList();
  }

  getSubCategoryList() {
    this.subCategoryService.get<any>().subscribe(res => {
      res.forEach(item => {
        this.subCategoryList.push(new SelectItem({
          id: item.id,
          name: item.name,
          category: item.category,
          connectProducts: item.connectProducts
        }, item.name));
      });
    })
  }
}
