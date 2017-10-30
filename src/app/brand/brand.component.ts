import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Brand} from "./brand";
import {CrudController} from "../service/crud.controller";
import {BrandService} from "./brand.service";
import {ToastsManager} from "ng2-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent extends CrudController<Brand, number> implements OnInit {

  constructor(protected toastr: ToastsManager,
              protected vcr: ViewContainerRef,
              brandService: BrandService) {
    super(toastr, vcr, brandService, Brand);
  }
}
