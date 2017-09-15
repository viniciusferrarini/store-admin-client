import {Component, Input, OnInit, ViewContainerRef} from '@angular/core';
import {CrudController} from "../service/crud.controller";
import {Product} from "./product";
import {ProductService} from "./product.service";
import {ModelService} from "../model/model.service";
import {Model} from "../model/model";
import {SelectItem} from "../entity/dto/select.item";
import {SubCategoryService} from "../sub-category/sub-category.service";
import {BrandService} from "../brand/brand.service";
import {ProductModel} from "../entity/product.model";
import {letProto} from "rxjs/operator/let";
import {ToastsManager} from "ng2-toastr";

@Component({
  moduleId: module.id,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends CrudController<Product, number> {

  showModels: boolean;
  @Input() sourceList: Model[] = [];
  @Input() targetList: Model[] = [];
  @Input() modelList: Model[] = [];
  brandList: SelectItem[] = [];
  subCategoryList: SelectItem[] = [];

  constructor(protected toastr: ToastsManager,
              protected vcr: ViewContainerRef,
              productService: ProductService,
              private modelService: ModelService,
              private subCategoryService: SubCategoryService,
              private brandService: BrandService) {
    super(toastr, vcr, productService, Product);
    this.getModelsList();
    this.getSubCategoryList();
    this.getBrandList();
  }

  onRowSelect() {
    this.preSelectModels();
    this.displayEdit = true;
    this.acao = "Editar ";
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
    e.items.forEach(i => {
      this.objeto.models.push(new ProductModel(i));
    });
  }

  removeItem(e) {
    if (e.items.length > 1) {
      this.objeto.models.splice(0, e.items.length);
    } else {
      const index = this.objeto.models.indexOf(e.items[0]);
      this.objeto.models.splice(index, 1);
    }
  }

  preSelectModels() {
    this.sourceList = [];
    this.targetList = [];
    for (let i = 0; i < this.modelList.length; i++) {
      const objModel = this.modelList[i];
      let achou = false;
      for (let j = 0; j < this.objeto.models.length; j++) {
        const objProd = this.objeto.models[j];
        if (objModel.id === objProd.model.id){
          achou = true;
        }
      }
      if (achou) {
        this.targetList.push(objModel);
      } else {
        this.sourceList.push(objModel);
      }
    }
  }
}
