import {Injectable} from '@angular/core';
import {CrudService} from "../service/crud.service";
import {HttpService} from "../service/http.service";
import {environment} from "../../environments/environment";
import {SubCategory} from "./sub-category";

@Injectable()
export class SubCategoryService extends CrudService<SubCategory, number> {

  constructor(private httpService: HttpService) {
    super(SubCategory);
  }

  protected getUrl(): string {
    return environment.proxy + "/subCategory";
  }

  protected getHttpService(): HttpService {
    return this.httpService;
  }

}
