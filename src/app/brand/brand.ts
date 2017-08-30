import {CrudEntity} from "../service/crud.entity";

export class Brand implements CrudEntity<number> {

  id: number;
  name: string;

}
