import {CrudService} from "../service/crud.service";
import {User} from "./user";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService extends CrudService<User, number> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  protected getUrl(): string {
    return "/user";
  }

}
