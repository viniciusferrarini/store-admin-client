import {Injectable} from '@angular/core';
import {CrudService} from "../service/crud.service";
import {environment} from "../../environments/environment";
import {Product} from "./product";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductService extends CrudService<Product, number> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  protected getUrl(): string {
    return environment.proxy + "/product";
  }
}
