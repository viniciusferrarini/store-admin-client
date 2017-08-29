import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginService} from "./service/login.service";
import {UserService} from "./user/user.service";
import {HttpService} from "./service/http.service";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AppRoutingModule} from "./routes/app.routing.module";
import {MenuComponent} from "./menu/menu.component";
import {NavComponent} from "./nav/nav.component";
import {DashboardModule} from "./dashboard/dashboard.module";
import {ProductModule} from "./product/product.module";
import {MensagemService} from "./growl/mensagem.service";
import {MensagemModule} from "./growl/mensagem.module";
import {UserComponent} from './user/user.component';
import {CategoryModule} from "./category/category.module";
import {SubCategoryModule} from "./sub-category/sub-category.module";
import {ModelModule} from "./model/model.module";
import {CategoryService} from "./category/category.service";
import { BrandComponent } from './brand/brand.component';
import {BrandModule} from "./brand/brand.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    NavComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    ProductModule,
    MensagemModule,
    CategoryModule,
    SubCategoryModule,
    ModelModule,
    BrandModule
  ],
  providers: [
    HttpService,
    LoginService,
    UserService,
    MensagemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
