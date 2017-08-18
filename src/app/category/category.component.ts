import {Component, OnInit} from '@angular/core';
import {CategoryService} from "./category.service";
import {Category} from "./category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  lista: Category[];
  objeto: Category;
  constructor(categoryService: CategoryService) {
   categoryService.findAll().then(value => this.lista = value);
  }
  ngOnInit(): void {
    this.objeto = new Category;
  }
}
