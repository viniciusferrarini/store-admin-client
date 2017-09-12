import {Component} from "@angular/core";
import {LoginService} from "../service/login.service";
import {User} from "app/user/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();

  constructor(private loginService: LoginService) {}

  login(user: User) {
    this.loginService.login(user.email, user.password);
  }
}
