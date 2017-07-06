import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";

import {routing} from "./routes/routes";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {LoginModule} from "./login/login.module";
import {LoginService} from "./login/login.service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./home/home.component";
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    MenuComponent,
    NavComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    LoginModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
