import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginService} from "./service/login.service";
import {UserService} from "./user/user.service";
import {HttpService} from "./service/http.service";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
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
import {BrandModule} from "./brand/brand.module";
import {LoginModule} from "./login/login.module";
import {GalleryModule} from "./gallery/gallery.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpLoginInterceptor} from "./service/http.login.interceptor";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NavComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    ProductModule,
    CategoryModule,
    SubCategoryModule,
    ModelModule,
    BrandModule,
    LoginModule,
    GalleryModule
  ],
  providers: [
    HttpService,
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoginInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
