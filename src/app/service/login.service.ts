import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {environment} from "../../environments/environment";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {User} from "../user/user";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {HttpService} from "./http.service";
import {MensagemService} from "../growl/mensagem.service";

@Injectable()
export class LoginService implements CanActivate {

  private subjectUser = new Subject<User>();
  private isLoggedIn = new Subject<Boolean>();

  constructor(private router: Router,
              private httpA: Http,
              private http: HttpService,
              private mensagemService: MensagemService) {
    this.isLoggedIn = new Subject<Boolean>();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const check = localStorage.getItem('access_token') != null;
    if (!check) {
      this.router.navigate(['/login']);
    }
    return check;
  }

  isAuthorized() {
    return localStorage.getItem('access_token') != null;
  }

  observableIsLoggedIn() {
    return this.isLoggedIn.asObservable();
  }

  login(email, password): Promise<void> {

    const params = new URLSearchParams();
    params.append('username', email);
    params.append('password', password);
    params.append('grant_type', 'password');

    const headers = new Headers({
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic YXBwOmFwcA==' /*+ btoa("app:app")*/
    });
    const options = new RequestOptions({headers: headers});

    const url = `${environment.proxy}/oauth/token`;
    return this.httpA.post(url, params.toString(), options)
      .toPromise()
      .then(e => {
        this.isLoggedIn.next(true);
        this.saveToken(e.json());
        this.setUser();
      })
      .catch(() => {
        this.mensagemService.send("error", "Erro ao realizar login", "Usuário ou senha inválidos");
      });
  }

  saveToken(token) {
    localStorage.setItem('access_token', token.access_token);
  }

  setUser() {
    const url = `${environment.proxy}/user/userLogged`;
    this.http.get(url)
      .toPromise()
      .then(response => {
        this.subjectUser.next(response.json() as User)
      }).catch(() => {
        this.logout();
      });
  }

  getUser(): Observable<User> {
    return this.subjectUser.asObservable();
  }

  logout() {
    localStorage.removeItem('access_token');
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
