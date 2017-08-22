import {CrudEntity} from "../service/crud.entity";

export class SubCategory implements CrudEntity<number> {

  id: number;
  name: string;

}
