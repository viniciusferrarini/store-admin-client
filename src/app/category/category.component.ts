import {Component, OnInit} from '@angular/core';
import {CategoryService} from "./category.service";
import {Category} from "./category";
import {MensagemService} from "../growl/mensagem.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  lista: Category[] = [];
  objeto: Category = new Category();
  displayEdit: Boolean = false;
  acao: string;

  constructor(public categoryService: CategoryService, private mensagemService: MensagemService) {}

  ngOnInit(): void {
    this.categoryService.getTable().subscribe( res => {this.lista = res});
  }

  persist() {
    if (this.objeto.id != null) {
      this.categoryService.save(this.objeto)
        .subscribe(res => {
          this.mensagemService.send("success", "Sucesso!", "Registro editado com sucesso");
          this.displayEdit = false;
        });
    } else {
      this.categoryService.save(this.objeto)
        .subscribe(res => {
          const listaTemp = [...this.lista];
          listaTemp.push(res);
          this.lista = listaTemp;
          this.mensagemService.send("success", "Sucesso!", "Novo registro incluído com sucesso");
          this.displayEdit = false;
        });
    }
  }

  novo() {
    this.objeto = new Category();
    this.displayEdit = true;
    this.acao = "Novo cadastro";
  }

  remove() {
    this.categoryService.remove(this.objeto.id).subscribe(res => {
      const listTemp = [...this.lista];
      const index = listTemp.indexOf(this.objeto);
      listTemp.splice(index, 1);
      this.lista = listTemp;
      this.mensagemService.send("success", "Sucesso!", "Registro removido com sucesso");
      this.displayEdit = false;
    });
  }

  onRowSelect() {
    this.displayEdit = true;
    this.acao = "Editar " + this.objeto.name;
  }
}
