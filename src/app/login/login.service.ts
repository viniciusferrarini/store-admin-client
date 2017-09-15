import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs/Subject";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService implements CanActivate {

  public isLoggedIn = new Subject<Boolean>();

  constructor(private router: Router,
              private http: Http) {
    this.isLoggedIn = new Subject<Boolean>();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthorized();
  }

  observableIsLoggedIn() {
    return this.isLoggedIn.asObservable();
  }

  login(email, password): void {

    const params = new URLSearchParams();
    params.append('username', email);
    params.append('password', password);
    params.append('grant_type', 'password');

    const headers = new Headers({ 'Content-type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic YXBwOmFwcA==' });
    const options = new RequestOptions({headers: headers});

    const url = `${environment.proxy}/oauth/token`;
    this.http.post(url, params.toString(), options)
      .subscribe(res => {
        this.setLoggedIn(res.json());
      }, error => {
        if (error.error === "invalid_grant") {
          this.toastr.error("E-mail ou senha inválido!", "Erro");
        }
        this.logout();
      });
  }

  setLoggedIn(res) {
    this.isLoggedIn.next(true);
    localStorage.setItem('access_token', res.access_token);
    this.router.navigate(['/home']);
  }

  logout() {
    localStorage.removeItem('access_token');
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }

  isAuthorized() {
    if (localStorage.getItem('access_token') !== null) {
      return true;
    }
    this.logout();
    return false;
  }
}
