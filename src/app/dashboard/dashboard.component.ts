import { Component, OnInit } from '@angular/core';
import {AmChartsService} from "@amcharts/amcharts3-angular";
import {BuyService} from "../buy/buy.service";
import {BuyTotal} from "../buy/buy.total";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  buyTotal: BuyTotal = new BuyTotal;
  totalUser: number;

  constructor(private AmCharts: AmChartsService,
              private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.findBuyAndTotalValueLastTenDays();
    this.findNewUsers();
  }

  findBuyAndTotalValueLastTenDays() {
    return this.httpClient
      .get<BuyTotal>(environment.proxy + "/buy/findBuyAndTotalValueLastTenDays")
      .subscribe((data: BuyTotal) => {
        this.buyTotal = data
        this.createChart(data.chart);
    });
  }

  findNewUsers() {
    return this.httpClient
      .get<any>(environment.proxy + "/user/findTotalNewUsers")
      .subscribe((data: any) => this.totalUser = data);
  }

  createChart(dataProvider) {
    this.AmCharts.makeChart('totalAmount', {
      "type": "serial",
      "theme": "light",
      "categoryField": "category",
      "startDuration": 1,
      "graphs": [
        {
          "balloonText": "[[category]]: [[value]]",
          "fillAlphas": 1,
          "id": "data",
          "title": "Data",
          "type": "column",
          "valueField": "totalLong"
        }
      ],
      "dataProvider": dataProvider
    });

    this.AmCharts.makeChart('totalValue', {
      "type": "serial",
      "theme": "light",
      "categoryField": "category",
      "startDuration": 1,
      "graphs": [
        {
          "balloonText": "[[category]]: R$[[value]]",
          "fillAlphas": 1,
          "id": "data",
          "title": "Data",
          "type": "column",
          "valueField": "totalDouble"
        }
      ],
      "numberFormatter": {
        "precision": 2,
        "decimalSeparator": ",",
        "thousandsSeparator": "."
      },
      "dataProvider": dataProvider
    });
  }

}
