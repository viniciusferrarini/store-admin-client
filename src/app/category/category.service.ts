import {Injectable} from '@angular/core';
import {Category} from "./category";
import {CrudService} from "../service/crud.service";
import {HttpService} from "../service/http.service";
import {environment} from "../../environments/environment";

@Injectable()
export class CategoryService  extends CrudService<Category, number> {
  constructor(private httpService: HttpService) {
    super();
  }
  protected getUrl(): string {
    return environment.proxy + "/category";
  }
  protected getHttpService(): HttpService {
    return this.httpService;
  }
}
