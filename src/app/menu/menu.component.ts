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
    this.render = loginService.isAuthorized();
    loginService.observableIsLoggedIn().subscribe(res => this.render = res);
  }

  ngOnInit() {
  }

}
