import {Component} from "@angular/core";
import {LoginService} from "./login.service";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;
  error = false;

  constructor(private loginService: LoginService) {}

  login() {
    const self = this;
    this.loginService.login(this.email, this.password, function() {
      self.error = true;
    });
  }

}
