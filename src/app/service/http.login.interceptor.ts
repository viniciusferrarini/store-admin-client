import {Injectable} from '@angular/core';
import 'rxjs/add/operator/do';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {LoginService} from "./login.service";
import {environment} from "../../environments/environment";

@Injectable()
export class HttpLoginInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({
      headers: req.headers.set('Content-Type', 'application/json').append('Authorization', 'bearer ' + localStorage.getItem("access_token"))
    });

    const started = Date.now();
    return next.handle(authReq).do(event => {
      if (environment.showLogRequestTime) {
        if (event instanceof HttpResponse) {
          this.loginService.isLoggedIn.next(true);
          const elapsed = Date.now() - started;
          console.log(`">>>>>>>>>>>>>>>>>>>>> Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      }
    }, err => {
      if ( err.status === 401 ) {
        this.loginService.logout();
      }
    });
  }
}
