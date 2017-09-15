import {OnInit, ViewContainerRef} from "@angular/core";
import {CrudEntity} from "./crud.entity";
import {CrudService} from "./crud.service";
import {ToastsManager} from "ng2-toastr";

export abstract class CrudController<T extends CrudEntity<ID>, ID> implements OnInit {

  lista: T[] = [];
  objeto: T = new this.type;
  displayEdit: Boolean = false;
  acao: string;

  constructor(protected toastr: ToastsManager,
              protected vcr: ViewContainerRef,
              public crudService: CrudService<T, ID>,
              private type: any) {
    this.toastr.setRootViewContainerRef(this.vcr);
  };

  ngOnInit(): void {
    this.getTable();
  };

  getTable() {
    this.crudService
      .get<any[]>()
      .subscribe((data: any[]) => this.lista = data,
        error => () => {
          this.errorMessages(error);
        });
  }

  persist() {
    if (this.objeto.id != null) {
      this.crudService.post<any>(JSON.stringify(this.objeto))
        .subscribe(
          res => {
            this.toastr.success("Cadastro atualizado com sucesso!", "Sucesso!");
            this.displayEdit = false;
          },
          err => {
            this.errorMessages(err);
          }
        );
    } else {
      this.crudService.post<any>(JSON.stringify(this.objeto))
        .subscribe(
          res => {
            this.toastr.success("Cadastro realizado com sucesso!", "Sucesso!");
            const listaTemp = [...this.lista];
            this.objeto = res;
            listaTemp.push(res);
            this.lista = listaTemp;
            this.displayEdit = false;
          },
          err => {
            this.errorMessages(err);
          }
        );
    }
  };

  private errorMessages(err) {
    if (err.error.errors.length > 0) {
      err.error.errors.forEach(e => {
        this.toastr.error(e.defaultMessage, "Erro!");
      });
    }
  }

  new() {
    this.objeto = new this.type;
    this.displayEdit = true;
    this.acao = "Cadastro";
  };

  remove() {
    this.crudService.delete<any>(JSON.stringify(this.objeto.id))
      .subscribe(res => {
        const listTemp = [...this.lista];
        const index = listTemp.indexOf(this.objeto);
        listTemp.splice(index, 1);
        this.lista = listTemp;
        this.displayEdit = false;
      }, err => {
        this.errorMessages(err);
      });
  };

  onRowSelect() {
    this.displayEdit = true;
    this.acao = "Editar ";
  };

}
