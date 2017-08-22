import {CrudEntity} from "../service/crud.entity";

export class Product implements CrudEntity<number> {

  id: number;

  name: string;

  description: string;

  amount: number;

  value: number;

  /*@JoinColumn(name = "brandId", referencedColumnName = "id")
  @ManyToOne(fetch = FetchType.EAGER)
  private Brand brand;*/

  /*@JoinColumn(name = "subCategoryId", referencedColumnName = "id")
  @ManyToOne(fetch = FetchType.EAGER)
  private SubCategory subCategory;*/

  /*@ManyToMany(cascade = CascadeType.ALL)
  private List<Model> model = new ArrayList<>();*/

}
