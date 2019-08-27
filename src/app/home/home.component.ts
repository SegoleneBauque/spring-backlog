import { Component, OnInit } from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks: Task[] = [{
    id: 1,
    title: 'Ma premiere tâche',
    itemId: 1,
    item: 'Afficher une tâche',
    personInCharge: 'David Schieffer',
    state: 'Todo',
    acceptanceCriteria: new Map().set("Mon premier critère", true).set("mon deuxième critère", false)
  },
    {
      id: 2,
      title: 'Ma deuxième  tâche',
      itemId: 1,
      item: 'Afficher une deuxième tâche',
      personInCharge: 'David Schieffer',
      state: 'WIP',
      acceptanceCriteria: new Map().set("Mon premier critère", true).set("mon deuxième critère", false)
    }];

  constructor() { }

  ngOnInit() {
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
