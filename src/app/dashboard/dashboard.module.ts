import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";
import {AmChartsModule} from "@amcharts/amcharts3-angular";

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    AmChartsModule
  ]
})
export class DashboardModule {

}
