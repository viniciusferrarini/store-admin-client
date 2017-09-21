import {Component, Input, OnInit, ViewContainerRef} from '@angular/core';
import {UserAdress} from "./user-adress";
import {CrudController} from "../service/crud.controller";
import {UserAdressService} from "./user-adress.service";
import {ToastsManager} from "ng2-toastr";
import {User} from "../user/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  moduleId: module.id,
  selector: 'app-user-adress',
  templateUrl: './user-adress.component.html',
  styleUrls: ['./user-adress.component.css']
})
export class UserAdressComponent extends CrudController<UserAdress, number> implements OnInit {

  @Input() user: User;

  constructor(protected toastr: ToastsManager,
              protected vcr: ViewContainerRef,
              userAdressService: UserAdressService,
              private httpClient: HttpClient) {
    super(toastr, vcr, userAdressService, UserAdress);
  }

  ngOnInit(): void {
    this.httpClient.get<UserAdress[]>(environment.proxy + "/userAdress/findByUser/" + this.user.id).subscribe((res) => {
      this.lista = res;
    });
  };

}
