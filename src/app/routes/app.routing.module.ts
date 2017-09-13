import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {HomeComponent} from "../home/home.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {ProductComponent} from "../product/product.component";
import {CategoryComponent} from "../category/category.component";
import {ModelComponent} from "../model/model.component";
import {SubCategoryComponent} from "../sub-category/sub-category.component";
import {BrandComponent} from "../brand/brand.component";
import {GalleryComponent} from "../gallery/gallery.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'product', component: ProductComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'subCategory', component: SubCategoryComponent},
  {path: 'model', component: ModelComponent},
  {path: 'brand', component: BrandComponent},
  {path: 'gallery', component: GalleryComponent}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
