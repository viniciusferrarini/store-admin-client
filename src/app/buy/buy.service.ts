import {Injectable} from '@angular/core';
import {CrudService} from "../service/crud.service";
import {HttpClient} from "@angular/common/http";
import {Buy} from "./buy";

@Injectable()
export class BuyService extends CrudService<Buy, number> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  protected getUrl(): string {
    return "/buy";
  }
}
