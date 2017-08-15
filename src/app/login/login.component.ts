import {Component} from "@angular/core";
import {LoginService} from "../service/login.service";
import {User} from "app/model/user";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();

  createAccount = false;
  constructor(private router: Router,
              private userService: UserService,
              private loginService: LoginService) {
  }

  login(user: User) {
    this.loginService.login(user.email, user.password).then(() => {
      this.router.navigate(['/home']);
    }).catch(() => {
      console.log('Email or password is invalid!');
    });
  }

  create(user: User) {
    this.userService.save(user).then(e => {
      console.log('User has been created');
      this.login(user);
    }).catch(e => {
      console.log(e.json().message);
    });
  }

}
