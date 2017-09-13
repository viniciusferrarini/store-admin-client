import {Component} from '@angular/core';
import {CrudController} from "../service/crud.controller";
import {Product} from "./product";
import {ProductService} from "./product.service";
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
  targetList: Model[] = [];
  brandList: SelectItem[] = [];
  subCategoryList: SelectItem[] = [];

  constructor(productService: ProductService,
              private modelService: ModelService,
              private subCategoryService: SubCategoryService,
              private brandService: BrandService) {
    super(productService, Product);
    this.getModelsList();
    this.getSubCategoryList();
    this.getBrandList();
  }

  getModelsList() {
    this.modelService
      .get()
      .subscribe((data: any[]) => this.modelList = data,
        error => () => {
          console.log(error);
        },
        () => {
          console.log("fim da requisição");
        });
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

  getBrandList() {
   this.brandService.get<any>().subscribe(res => {
      res.forEach(item => {
        this.brandList.push(new SelectItem({id: item.id, name: item.name}, item.name));
      });
    })
  }

  subCategoryChange(e) {
    this.showModels = e.value.connectProducts;
  }

  addItem(e) {
    this.objeto.models = e.items;
  }

  removeItem(e) {
    this.objeto.models = e.items;
  }

}
