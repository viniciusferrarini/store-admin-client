import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ToastsManager} from "ng2-toastr";
import {User} from "./user";
import {CrudController} from "../service/crud.controller";
import {UserService} from "./user.service";

@Component({
  moduleId: module.id,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends CrudController<User, number> implements OnInit {

  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public cellPhoneMask = ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(protected toastr: ToastsManager,
              protected vcr: ViewContainerRef,
              userService: UserService) {
    super(toastr, vcr, userService, User);
  }

  new() {
    this.objeto = new User();
    this.objeto.registerDate = new Date();
    this.displayEdit = true;
    this.acao = "Cadastro";
  }

  cpfCnpjMask() {
    if(this.objeto.cpfCnpj !== undefined && this.objeto.cpfCnpj !== "") {
      let numbers = this.objeto.cpfCnpj.match(/\d/g);
      let numberLength = 0;
      if (numbers) {
        numberLength = numbers.join("").length;
      }
      if (numberLength > 11) {
        return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/,];
      } else {
        return [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
      }
    }
    return [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  }
}
