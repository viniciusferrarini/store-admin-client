import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  headers(): HttpHeaders {
    const token = localStorage.getItem("access_token");
    if (token) {
      return new HttpHeaders()
          .set('Authorization', 'bearer ' + localStorage.getItem("access_token"))
    }
    return null;
  }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url, {headers: this.headers()});
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.httpClient.post<T>(url, body, {headers: this.headers()});
  }

  delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(url, {headers: this.headers()});
  }
}
