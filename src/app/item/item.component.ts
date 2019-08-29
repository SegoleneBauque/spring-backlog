import {Component, OnInit} from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})


export class ItemComponent implements OnInit {


  item: Item = {
  id :  1,
  title : "Espace client",
    userStory: 'Je souhaite avoir un compte utilisateur',
    tasks: []
};

  constructor() {

   }

  ngOnInit() {}

  /*private getAllTasks(idItem: number)
  {
    this.taskService.
  }*/


}


