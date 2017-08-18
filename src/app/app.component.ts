import {Component, OnInit} from '@angular/core';
import {User} from "./user/user";
import {LoginService} from "./service/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: User = new User();

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginService.setUser();
    this.loginService.getUser().subscribe(e => this.user = e);
  }

}

