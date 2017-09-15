import {CrudEntity} from "../service/crud.entity";
import {Brand} from "../brand/brand";
import {SubCategory} from "../sub-category/sub-category";
import {ProductModel} from "../entity/product.model";

export class Product implements CrudEntity<number> {

  id: number;

  name: string;

  description: string;

  amount: number;

  value: number;

  models: ProductModel[] = [];

  brand: Brand;

  subCategory: SubCategory = new SubCategory();

}
