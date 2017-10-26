import {Component, ViewContainerRef} from '@angular/core';
import {CrudController} from "../service/crud.controller";
import {BuyService} from "./buy.service";
import {ToastsManager} from "ng2-toastr";
import {Buy} from "./buy";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BuyPayment} from "../entity/dto/buy.payment";

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent extends CrudController<Buy, number> {

  lista: Buy[] = [];
  objeto: Buy = new Buy();
  payment: BuyPayment;

  constructor(protected toastr: ToastsManager,
              protected vcr: ViewContainerRef,
              buyService: BuyService,
              private http: HttpClient) {
    super(toastr, vcr, buyService, Buy);
  }

  getTable() {
    return this.http.get(environment.proxy + "/buy/findAllOrderByDateDesc")
      .subscribe((data: any[]) => this.lista = data,
        error => () => {
          console.log(error);
        },
        () => {
          console.log("fim da requisição");
        });
  }

  changeStatusDate() {
    this.objeto.statusDate = new Date();
  }
}
