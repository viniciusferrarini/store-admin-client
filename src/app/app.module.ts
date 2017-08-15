import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginService} from "./service/login.service";
import {UserService} from "./service/user.service";
import {HttpService} from "./service/http.service";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AppRoutingModule} from "./routes/app.routing.module";
import {MenuComponent} from "./menu/menu.component";
import {NavComponent} from "./nav/nav.component";
import {DashboardModule} from "./dashboard/dashboard.module";
import {ProductModule} from "./product/product.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    ProductModule
  ],
  providers: [
    HttpService,
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
