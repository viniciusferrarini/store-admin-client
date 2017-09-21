import {CrudService} from "../service/crud.service";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserAdress} from "./user-adress";

@Injectable()
export class UserAdressService extends CrudService<UserAdress, number> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  protected getUrl(): string {
    return "/userAdress";
  }

}
