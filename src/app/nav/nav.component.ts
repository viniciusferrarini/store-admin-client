import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('nav') nav: ElementRef;

  render: Boolean;

  constructor(private loginService: LoginService) {
    this.render = loginService.isAuthorized();
    loginService.observableIsLoggedIn().subscribe(res => this.render = res);
  }
  ngOnInit() {
  }
}
