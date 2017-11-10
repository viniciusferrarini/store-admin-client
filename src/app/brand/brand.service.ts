import {Injectable} from '@angular/core';
import {CrudService} from "../service/crud.service";
import {Brand} from "./brand";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BrandService extends CrudService<Brand, number>{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  protected getUrl(): string {
    return "/brand";
  }
}
