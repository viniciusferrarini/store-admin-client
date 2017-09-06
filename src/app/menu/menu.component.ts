import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "../service/login.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild('menu') menu: ElementRef;

  render: Boolean;

  constructor(private loginService: LoginService) {
    loginService.observableIsLoggedIn().subscribe(res => {this.render = res});
  }

  ngOnInit() {
  }

}

import {Injectable} from '@angular/core';
import 'rxjs/add/operator/do';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {LoginService} from "./login.service";
import {environment} from "../../environments/environment";

@Injectable()
export class HttpLoginInterceptor implements HttpInterceptor {
  constructor(public loginService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.loginService.isAuthorized()) {
      return next.handle(req); }
      const authReq = req.clone({ headers: req.headers
        .set('Authorization', "bearer " + localStorage.getItem('Authorization'))
        .set('Content-Type', 'application/json' )
      });
    const started = Date.now();
    return next.handle(authReq)
      .do(event => {
        if (environment.showLogRequestTime) {
          if (event instanceof HttpResponse) {
            const elapsed = Date.now() - started;
            console.log(`">>>>>>>>>>>>>>>>>>>>> Request for ${req.urlWithParams} took ${elapsed} ms.`);
          }
        }
      }, err => {
        if ( err.status === 401 ) {
          this.loginService.goToLogin();
        }
      });
  }
}
