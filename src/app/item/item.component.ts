import { Component, OnInit, Input } from '@angular/core';
import { item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})


export class ItemComponent implements OnInit {



item: item = {
  id :  1,
  title : "Espace client",
  userStory : 'Je souhaite avoir un compte utilisateur'
};

  constructor() {

   }

  ngOnInit() {}

  /*private getAllTasks(idItem: number)
  {
    this.taskService.
  }*/


}


