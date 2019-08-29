import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Item[];

  constructor() { }

  ngOnInit() {
  }

  private getItemTitle(id: number) {
    return this.items[id].title;
  }



}
