import {CrudEntity} from "../service/crud.entity";
import {SubCategory} from "../sub-category/sub-category";

export class Model implements CrudEntity<number> {

  id: number;
  name: string;
  subCategory: SubCategory;

}
