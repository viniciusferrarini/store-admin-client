import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "../login/login.service";
import {User} from "../user/user";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('nav') nav: ElementRef;

  user: User;
  render: Boolean;

  constructor(private loginService: LoginService) {}
  ngOnInit() {
    this.loginService.observableIsLoggedIn().subscribe(res => this.render = res);
  }

  logout() {
    this.loginService.logout();
  }

}
