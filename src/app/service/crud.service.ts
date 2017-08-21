///<reference path="../../../node_modules/rxjs/add/operator/catch.d.ts"/>
import {Model} from "../model/model";
import {HttpService} from "./http.service";
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {MensagemService} from "../growl/mensagem.service";

export abstract class CrudService<T extends Model<ID>, ID> {

  constructor(public type: any, private mensagemService: MensagemService) {}

  public getTable(): Observable<T[]> {
    return this.getHttpService().get(this.getUrl())
      .map(res => {
        const toReturn = [];
        const objetos = res.json()._embedded.objetos;
        const length = objetos.length;
        for (let i = 0; i < length; i++) {
          toReturn.push(Object.assign(new this.type, objetos[i]));
        }
        return toReturn;
      });
  }

  public findAll(): Promise<T[]> {
    const url = `${this.getUrl()}`;
    return this.getHttpService().get(url)
      .toPromise()
      .then(response => response.json() as T[])
      .catch(this.handleError);
  }

  public findOne(id: ID): Promise<T> {
    const url = `${this.getUrl()}/${id}`;
    return this.getHttpService().get(url)
      .toPromise()
      .then(response => response.json() as T)
      .catch(this.handleError);
  }

  public save(t: T): Observable<T> {
    const self = this;
    return this.getHttpService().post(this.getUrl(), t)
      .map(res => res.json() as T)
      .catch((err: any) => {
        const array = err.json().errors;
        for (let i = 0; i < array.length; i++) {
          self.mensagemService.send("warn", "Informação Inválida", array[i].message.toString())
        }
        return Observable.throw(err.statusText);
      });
  }

  /*public save(t: T): Promise<T> {
    return this.getHttpService().post(this.getUrl(), t)
      .toPromise()
      .then(response => response.json() as T)
      .catch(this.handleError);
  }*/

  public remove(id: ID): Observable<T> {
    const url = `${this.getUrl()}/${id}`;
    return this.getHttpService().delete(url)
      .map(() => null)
      .catch(this.handleError);
  }

  protected abstract getUrl(): string;

  protected abstract getHttpService(): HttpService;

  protected handleError(error: any): Promise<any> {
    this.mensagemService.send("warn", "Algo errado!", error.message || error);
    return Promise.reject(error.message || error);
  }
}
