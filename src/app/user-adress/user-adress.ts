import {CrudEntity} from "../service/crud.entity";
import {User} from "../user/user";

export class UserAdress implements CrudEntity<number> {

  id: number;

  zip: string;

  street: string;

  number: number;

  district: string;

  city: string;

  country: string;

  user: User;

}
