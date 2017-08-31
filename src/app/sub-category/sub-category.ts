import {CrudEntity} from "../service/crud.entity";
import {Category} from "../category/category";

export class SubCategory implements CrudEntity<number> {

  id: number;
  name: string;
  category: Category;
  connectProducts: Boolean = false;

}
