import { Component, OnInit } from '@angular/core';
import {CrudController} from "../service/crud.controller";
import {Model} from "./model";
import {ModelService} from "./model.service";
import {MensagemService} from "../growl/mensagem.service";

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent extends CrudController<Model, number> implements OnInit {

  constructor(modelService: ModelService, mensagemService: MensagemService) {
    super(modelService, mensagemService, Model);
  }

  ngOnInit() {
  }

}
