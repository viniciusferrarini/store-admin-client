import {OnInit} from "@angular/core";
import {CrudEntity} from "./crud.entity";
import {CrudService} from "./crud.service";
import {MensagemService} from "../growl/mensagem.service";

export abstract class CrudController<T extends CrudEntity<ID>, ID> implements OnInit {

  lista: T[] = [];
  objeto: T;
  displayEdit: Boolean = false;
  acao: string;

  constructor(public crudService: CrudService<T, ID>, public mensagemService: MensagemService, private type: any) {
    this.objeto = new this.type;
  };

  ngOnInit(): void {
    this.getTable();
  };

  getTable() {
    this.crudService.getTable().subscribe(res => { this.lista = res});
  }

  findAll() {
    this.crudService.getTable().subscribe(res => { this.lista = res});
    return this.lista;
  }

  persist() {
    if (this.objeto.id != null) {
      this.crudService.save(this.objeto)
        .subscribe(res => {
          this.mensagemService.send("success", "Sucesso!", "Registro editado com sucesso");
          this.displayEdit = false;
        });
    } else {
      this.crudService.save(this.objeto)
        .subscribe(res => {
          const listaTemp = [...this.lista];
          listaTemp.push(res);
          this.lista = listaTemp;
          this.mensagemService.send("success", "Sucesso!", "Novo registro incluído com sucesso");
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
      this.mensagemService.send("success", "Sucesso!", "Registro removido com sucesso");
      this.displayEdit = false;
    });
  };

  onRowSelect() {
    this.displayEdit = true;
    this.acao = "Editar ";
  };

}
