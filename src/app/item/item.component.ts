import { Component, OnInit, Input } from '@angular/core';
import { item } from '../item';
import { Task } from '../task';
import { TaskService } from './task.service';

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
}

  constructor(taskService: TaskService) {

   }

  ngOnInit() {}

  private getAllTasks(idItem: number)
  {
    this.taskService.
  }


}


