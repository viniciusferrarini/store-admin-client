import {CrudEntity} from "../service/crud.entity";
import {BuyFreight} from "../entity/dto/buy.freight";
import {BuyPayment} from "../entity/dto/buy.payment";
import {UserAdress} from "../entity/dto/user.adress";
import {User} from "../user/user";
import {BuyProduct} from "../entity/dto/buy.product";

export class Buy implements CrudEntity<number> {

  id: number;

  freight: BuyFreight;

  payment: BuyPayment;

  adress: UserAdress;

  user: User;

  products: BuyProduct[];

  date: Date;

  statusDate: Date;

  status: string;

}
