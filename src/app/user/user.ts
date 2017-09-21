import {CrudEntity} from "../service/crud.entity";
import {UserAdress} from "../user-adress/user-adress";

export class User implements CrudEntity<number> {
  id: number;
  name: string;
  email: string;
  password: string;
  cpfCnpj: string;
  adress: UserAdress[];
}
