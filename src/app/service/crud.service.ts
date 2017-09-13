import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {CrudEntity} from "./crud.entity";

@Injectable()
export abstract class CrudService <T extends CrudEntity<ID>, ID>  {

  constructor(private http: HttpClient) { }

  get<T>(): Observable<T> {
    return this.http.get<T>(this.getUrl());
  }

  post<T>(body: string): Observable<T> {
    return this.http.post<T>(this.getUrl(), body);
  }

  put<T>(body: string): Observable<T> {
    return this.http.put<T>(this.getUrl(), body);
  }

  delete<T>(body: string): Observable<T> {
    return this.http.delete<T>(this.getUrl() + "/" + body);
  }

  patch<T>(body: string): Observable<T> {
    return this.http.patch<T>(this.getUrl(), body);
  }

  protected abstract getUrl(): string;

}


