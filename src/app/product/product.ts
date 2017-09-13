import {CrudEntity} from "../service/crud.entity";
import {Model} from "../model/model";
import {Brand} from "../brand/brand";
import {SubCategory} from "../sub-category/sub-category";

export class Product implements CrudEntity<number> {

  id: number;

  name: string;

  description: string;

  amount: number;

  value: number;

  models: Model[] = [];

  brand: Brand;

  subCategory: SubCategory = new SubCategory();

}
