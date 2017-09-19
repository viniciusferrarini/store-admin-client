import {CrudService} from "../service/crud.service";
import {ProductGallery} from "./product.gallery";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductGalleryService extends CrudService<ProductGallery, number> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  protected getUrl(): string {
    return "/gallery";
  }

}
