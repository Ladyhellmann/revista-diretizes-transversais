import { Component, OnInit } from '@angular/core';

import * as data from "./who-are-us.data.json";

@Component({
  selector: 'who-are-us',
  templateUrl: "./who-are-us.component.html"
})
export class WhoAreUsComponent implements OnInit {
  equip: any = data

  ngOnInit() {
  }
}