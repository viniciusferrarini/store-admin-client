import {Injectable} from '@angular/core';
import {CrudService} from "../service/crud.service";
import {HttpService} from "../service/http.service";
import {environment} from "../../environments/environment";
import {MensagemService} from "../growl/mensagem.service";
import {Product} from "./product";

@Injectable()
export class ProductService extends CrudService<Product, number> {

  constructor(private httpService: HttpService, mensagemService: MensagemService) {
    super(Product, mensagemService);
  }

  protected getUrl(): string {
    return environment.proxy + "/product";
  }

  protected getHttpService(): HttpService {
    return this.httpService;
  }

}
