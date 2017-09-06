import {Component} from "@angular/core";
import {LoginService} from "../service/login.service";
import {User} from "app/user/user";
import {Router} from "@angular/router";
import {MensagemService} from "../growl/mensagem.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();

  constructor(private router: Router, private loginService: LoginService, private mensagemService: MensagemService) {}

  login(user: User) {
    this.loginService.login(user.email, user.password).then(() => {
      this.router.navigate(['/home']);
    }).catch( () => {
      console.log("Usuário ou senha invalidos");
    });
  }
}
