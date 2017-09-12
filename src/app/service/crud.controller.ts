import {OnInit} from "@angular/core";
import {CrudEntity} from "./crud.entity";
import {CrudService} from "./crud.service";
import {MensagemService} from "../growl/mensagem.service";

export abstract class CrudController<T extends CrudEntity<ID>, ID> implements OnInit {

  lista: T[] = [];
  objeto: T = new this.type;
  displayEdit: Boolean = false;
  acao: string;

  constructor(public crudService: CrudService<T, ID>, private type: any) { };

  ngOnInit(): void {
    this.getTable();
  };

  getTable() {
    this.crudService.getTable().subscribe(res => { this.lista = res});
  }

  persist() {
    if (this.objeto.id != null) {
      this.crudService.save(this.objeto)
        .subscribe(res => {
          this.displayEdit = false;
        });
    } else {
      this.crudService.save(this.objeto)
        .subscribe(res => {
          const listaTemp = [...this.lista];
          this.objeto = res;
          listaTemp.push(res);
          this.lista = listaTemp;
          this.displayEdit = false;
        });
    }
  };

  new() {
    this.objeto = new this.type;
    this.displayEdit = true;
    this.acao = "Cadastro";
  };

  remove() {
    this.crudService.remove(this.objeto.id).subscribe(res => {
      const listTemp = [...this.lista];
      const index = listTemp.indexOf(this.objeto);
      listTemp.splice(index, 1);
      this.lista = listTemp;
      this.displayEdit = false;
    });
  };

  onRowSelect() {
    this.displayEdit = true;
    this.acao = "Editar ";
  };

}
