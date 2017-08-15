import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {LoginService} from "../service/login.service";
import {HomeComponent} from "../home/home.component";
import {DashboardComponent} from "../dashboard/dashboard.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  {path: '', canActivate: [LoginService], children: [
    {path: '', children: [
      {path: 'home', component: HomeComponent},
      {path: 'dashboard', component: DashboardComponent}
    ]}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
