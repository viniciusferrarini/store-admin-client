import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {LoginService} from "../service/login.service";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {ProductComponent} from "../product/product.component";

const routes: Routes = [
  { path: '', canActivate: [LoginService], children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'product', component: ProductComponent},
  ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
