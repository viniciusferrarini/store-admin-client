import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs/Subject";
import {Router} from "@angular/router";
import {Headers, Http, RequestOptions} from "@angular/http";

@Injectable()
export class LoginService {

  public isLoggedIn = new Subject<Boolean>();

  constructor(private router: Router,
              private http: Http) {
    this.isLoggedIn = new Subject<Boolean>();
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
    return localStorage.getItem('access_token') !== null;
  }
}
