import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {LoginService} from "../login/login.service";
import {HomeComponent} from "../home/home.component";

const routes: Routes = [
  { path: '', canActivate: [LoginService], children: [
        {path: 'login', component: LoginComponent},
        {path: 'home', component: HomeComponent}
      ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
