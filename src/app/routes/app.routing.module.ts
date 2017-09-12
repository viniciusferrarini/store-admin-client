/*import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {LoginService} from "../service/login.service";
import {HomeComponent} from "../home/home.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {ProductComponent} from "../product/product.component";
import {CategoryComponent} from "../category/category.component";
import {ModelComponent} from "../model/model.component";
import {SubCategoryComponent} from "../sub-category/sub-category.component";
import {BrandComponent} from "../brand/brand.component";
import {GalleryComponent} from "../gallery/gallery.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [LoginService]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [LoginService]},
  {path: 'product', component: ProductComponent, canActivate: [LoginService]},
  {path: 'category', component: CategoryComponent, canActivate: [LoginService]},
  {path: 'subCategory', component: SubCategoryComponent, canActivate: [LoginService]},
  {path: 'model', component: ModelComponent, canActivate: [LoginService]},
  {path: 'brand', component: BrandComponent, canActivate: [LoginService]},
  {path: 'gallery', component: GalleryComponent, canActivate: [LoginService]}
];

export const AppRoutingModule = RouterModule.forRoot(routes);*/

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
