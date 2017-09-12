import {Injectable} from "@angular/core";
import {CrudService} from "../service/crud.service";
import {HttpService} from "../service/http.service";
import {environment} from "../../environments/environment";
import {Model} from "./model";

@Injectable()
export class ModelService  extends CrudService<Model, number> {

  constructor(private httpService: HttpService) {
    super(Model);
  }

  protected getUrl(): string {
    return environment.proxy + "/model";
  }

  protected getHttpService(): HttpService {
    return this.httpService;
  }

}
