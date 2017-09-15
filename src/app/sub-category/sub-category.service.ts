import {Injectable} from '@angular/core';
import {CrudService} from "../service/crud.service";
import {environment} from "../../environments/environment";
import {SubCategory} from "./sub-category";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SubCategoryService extends CrudService<SubCategory, number> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  protected getUrl(): string {
    return "/subCategory";
  }

}
