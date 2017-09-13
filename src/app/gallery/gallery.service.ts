import {Injectable} from "@angular/core";
import {CrudService} from "../service/crud.service";
import {Category} from "../category/category";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GalleryService extends CrudService<Category, number> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  protected getUrl(): string {
    return environment.proxy + "/gallery";
  }

}
