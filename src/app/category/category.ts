import {CrudEntity} from "../service/crud.entity";

export class Category implements CrudEntity<number> {

  id: number;
  name: string;

}
