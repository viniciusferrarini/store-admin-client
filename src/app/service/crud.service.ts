import {CrudEntity} from "./crud.entity";
import {HttpService} from "./http.service";
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

export abstract class CrudService<T extends CrudEntity<ID>, ID> {

  constructor(public type: any) {}

  public getTable(): Observable<T[]> {
    return this.getHttpService().get(this.getUrl())
      .map(res => {
        const toReturn = [];
        const objetos = res;
        for (let i = 0; i < length; i++) {
          toReturn.push(Object.assign(new this.type, objetos[i]));
        }
        return toReturn;
      });
  }

  public save(t: T): Observable<T> {
    return this.getHttpService().post(this.getUrl(), t)
      .map(res => {
        return res;
      }).catch((err: any) => {
        return Observable.throw(err.statusText);
      });
  }

  public remove(id: ID): Observable<T> {
    const url = `${this.getUrl()}/${id}`;
    return this.getHttpService().delete(url)
      .map(() => null)
      .catch(this.handleError);
  }

  protected abstract getUrl(): string;

  protected abstract getHttpService(): HttpService;

  protected handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
