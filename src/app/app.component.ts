import {Component, OnInit} from '@angular/core';
import {User} from "./user/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: User = new User();

  constructor() {
  }

  ngOnInit(): void { }

}

