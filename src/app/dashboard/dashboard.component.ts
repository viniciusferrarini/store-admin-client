import { Component, OnInit } from '@angular/core';
import {AmChartsService} from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private AmCharts: AmChartsService) { }

  ngOnInit() {
    this.createChart("teste", {});
  }

  createChart(element, dataProvider) {
    this.AmCharts.makeChart(element, {
      "type": "serial",
      "theme": "light",
      "categoryField": "category",
      "startDuration": 1,
      "graphs": [
        {
          "balloonText": "[[category]]: R$[[value]]",
          "fillAlphas": 1,
          "id": "cliente",
          "title": "Cliente",
          "type": "column",
          "valueField": "value"
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
