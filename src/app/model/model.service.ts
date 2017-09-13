import {Injectable} from "@angular/core";
import {CrudService} from "../service/crud.service";
import {environment} from "../../environments/environment";
import {Model} from "./model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ModelService extends CrudService<Model, number> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  protected getUrl(): string {
    return environment.proxy + "/model";
  }

}
