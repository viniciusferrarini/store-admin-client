import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {HomeComponent} from "../home/home.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {ProductComponent} from "../product/product.component";
import {CategoryComponent} from "../category/category.component";
import {ModelComponent} from "../model/model.component";
import {SubCategoryComponent} from "../sub-category/sub-category.component";
import {BrandComponent} from "../brand/brand.component";
import {LoginService} from "../login/login.service";
import {UserService} from "../user/user.service";
import {UserComponent} from "../user/user.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [LoginService]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [LoginService]},
  {path: 'product', component: ProductComponent, canActivate: [LoginService]},
  {path: 'category', component: CategoryComponent, canActivate: [LoginService]},
  {path: 'subCategory', component: SubCategoryComponent, canActivate: [LoginService]},
  {path: 'model', component: ModelComponent, canActivate: [LoginService]},
  {path: 'brand', component: BrandComponent, canActivate: [LoginService]},
  {path: 'user', component: UserComponent, canActivate: [LoginService]}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
