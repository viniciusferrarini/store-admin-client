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

  displayAdress: Boolean = false;

  constructor(protected toastr: ToastsManager,
              protected vcr: ViewContainerRef,
              userService: UserService) {
    super(toastr, vcr, userService, User);
  }

  showAdress(item) {
    this.displayAdress = true;
    this.objeto = item;
  }

}
