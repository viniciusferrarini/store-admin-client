import { Injectable } from '@angular/core';
import {CrudService} from "../service/crud.service";
import {Brand} from "./brand";
import {HttpService} from "../service/http.service";
import {MensagemService} from "../growl/mensagem.service";
import {environment} from "../../environments/environment";

@Injectable()
export class BrandService extends CrudService<Brand, number> {

  constructor(private httpService: HttpService, mensagemService: MensagemService) {
    super(Brand, mensagemService);
  }

  protected getUrl(): string {
    return environment.proxy + "/brand";
  }

  protected getHttpService(): HttpService {
    return this.httpService;
  }
}
