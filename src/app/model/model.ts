import {CrudEntity} from "../service/crud.entity";

export class Model implements CrudEntity<number> {

  id: number;
  name: string;

}
