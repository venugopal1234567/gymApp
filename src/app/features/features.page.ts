import { Component, OnInit } from '@angular/core';
import {NgModel} from '@angular/forms';
@Component({
  selector: 'app-features',
  templateUrl: './features.page.html',
  styleUrls: ['./features.page.scss'],
})
export class FeaturesPage implements OnInit {

  constructor() { }
  todo = new Object();
  logForm() {
    console.log(this.todo)
  }
  ngOnInit() {
  }


}
