import {Component, OnInit} from '@angular/core';
import {CrudController} from "../service/crud.controller";
import {Product} from "./product";
import {ProductService} from "./product.service";
import {MensagemService} from "../growl/mensagem.service";
import {ModelService} from "../model/model.service";
import {Model} from "../model/model";
import {SelectItem} from "../dto/select.item";
import {SubCategoryService} from "../sub-category/sub-category.service";
import {BrandService} from "../brand/brand.service";

@Component({
  moduleId: module.id,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends CrudController<Product, number> {

  showModels: boolean;
  modelList: Model[] = [];
  brandList: SelectItem[] = [];
  subCategoryList: SelectItem[] = [];

  constructor(productService: ProductService,
              mensagemService: MensagemService,
              private modelService: ModelService,
              private subCategoryService: SubCategoryService,
              private brandService: BrandService) {
    super(productService, mensagemService, Product);
    this.getModelsList();
    this.getSubCategoryList();
    this.getBrandList();
  }

  getModelsList() {
    this.modelService.getTable().subscribe(res => {this.modelList = res});
  }

  getSubCategoryList() {
    this.subCategoryService.getTable().subscribe(res => {
      res.forEach(item => {
        this.subCategoryList.push(new SelectItem({id: item.id, name: item.name, category: item.category, connectProducts: item.connectProducts}, item.name));
      });
    })
  }

  getBrandList() {
    this.brandService.getTable().subscribe(res => {
      res.forEach(item => {
        this.brandList.push(new SelectItem({id: item.id, name: item.name}, item.name));
      });
    })
  }

  subCategoryChange(e) {
    this.showModels = e.value.connectProducts;
  }

}
