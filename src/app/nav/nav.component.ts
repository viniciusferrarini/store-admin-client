import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "../service/login.service";
import {User} from "../user/user";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('nav') nav: ElementRef;

  private user: Observable<User>;
  render: Boolean;

  constructor(private loginService: LoginService) {
    this.render = loginService.isAuthorized();
    loginService.observableIsLoggedIn().subscribe(res => this.render = res);
  }
  ngOnInit() {
    this.user = this.loginService.getUserLogado();
    console.log(this.user);
  }
}
