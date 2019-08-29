import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {TaskService} from "../services/task.service";
import {Item} from "../item";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks: Task[];
  items: Item[];

  constructor(private taskService: TaskService, private itemService: ItemService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(
      result => this.tasks = result,
      error => console.log("Une erreur est survenue", error)
    )
    this.itemService.getItems().subscribe(
      result => this.items = result,
      error => console.log("Une erreur est survenue", error)
    )
  }

  shouldDisplayTask(task: Task, itemId: number, etat: string) {
    if (task.itemId !== itemId) {
      return false;
    } else if (task.state !== etat) {
      return false;
  }
    return true;
  }

}
