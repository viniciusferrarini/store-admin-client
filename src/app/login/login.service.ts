import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs/Rx';
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService implements CanActivate {

  readonly JWT_KEY = "Authorization";

  private isLoggedIn: Subject<Boolean>;

  constructor(private http: Http, private router: Router) {
    this.isLoggedIn = new Subject<Boolean>();
  }

  observableIsLoggedIn() {
    return this.isLoggedIn.asObservable();
  }

  login(email: string, password: string, callbackError: Function) {
    const data = {
      "email": email,
      "password": password
    };

    const headers = new Headers({
      "Content-Type": "application/json"
    });
    const requestOptions = new RequestOptions({ headers: headers });

    this.http.post("http://localhost:7997/login", data, requestOptions)
      .map(res => res)
      .subscribe(res => {
        localStorage.setItem(this.JWT_KEY, res.text());
        this.isLoggedIn.next(true);
        this.goTo("/home");
        return res;
      }, error => callbackError());
  }

  logout() {
    localStorage.removeItem(this.JWT_KEY);
    this.isLoggedIn.next(false);
    this.goToLogin();
  }

  private goTo(page: string) {
    this.router.navigate([page]);
  }

  private goToLogin() {
    this.goTo("/login");
  }

  isAuthorized() {
    return localStorage.getItem(this.JWT_KEY) !== null;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthorized = this.isAuthorized() || state.url === "/login";
    if (!isAuthorized) {
      this.goToLogin();
    }
    return isAuthorized;
  }

}
