import {CrudService} from "../service/crud.service";
import {User} from "./user";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpService} from "../service/http.service";

@Injectable()
export class UserService extends CrudService<User, number> {

  constructor(private httpService: HttpService) {
    super();
  }

  protected getUrl(): string {
    return environment.proxy + "/user";
  }

  protected getHttpService(): HttpService {
    return this.httpService;
  }

}
