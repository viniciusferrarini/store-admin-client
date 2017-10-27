import {CrudEntity} from "../service/crud.entity";

export class User implements CrudEntity<number> {
  id: number;
  name: string;
  email: string;
  password: string;
  cpfCnpj: string;
  birthday: Date;
  telephone: string;
}
