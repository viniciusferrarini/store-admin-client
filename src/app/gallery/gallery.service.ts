import {Injectable} from "@angular/core";
import {CrudService} from "../service/crud.service";
import {Category} from "../category/category";
import {HttpService} from "../service/http.service";
import {MensagemService} from "../growl/mensagem.service";
import {environment} from "../../environments/environment";

@Injectable()
export class GalleryService extends CrudService<Category, number> {

  constructor(private httpService: HttpService, mensagemService: MensagemService) {
    super(Category, mensagemService);
  }

  protected getUrl(): string {
    return environment.proxy + "/gallery";
  }

  protected getHttpService(): HttpService {
    return this.httpService;
  }

}
