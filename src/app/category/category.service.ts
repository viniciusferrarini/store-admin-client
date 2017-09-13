import {Injectable} from '@angular/core';
import {Category} from "./category";
import {CrudService} from "../service/crud.service";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CategoryService extends CrudService<Category, number> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  protected getUrl(): string {
    return environment.proxy + "/category";
  }

}
