import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {TaskService} from "../services/task.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks: Task[];
  //  = [{
  //  id: 1,
  //  title: 'Ma premiere tâche',
  //  itemId: 1,
  //  item: 'Afficher une tâche',
  //  personInCharge: 'David Schieffer',
  //  state: 'Todo',
  //  acceptanceCriterias: new Map().set("Mon premier critère", true).set("mon deuxième critère", false)
  //  },
  //  {
  //    id: 2,
  //    title: 'Ma deuxième  tâche',
  //    itemId: 1,
  //    item: 'Afficher une deuxième tâche',
  //    personInCharge: 'David Schieffer',
  //    state: 'WIP',
  //    acceptanceCriterias: new Map().set("Mon premier critère", true).set("mon deuxième critère", false)
  //  },
  //  {
  //    id: 3,
  //    title: 'Ma troisième  tâche',
  //    itemId: 1,
  //    item: 'Afficher une troisième tâche',
  //    personInCharge: 'David Schieffer',
  //    state: 'QA',
  //    acceptanceCriterias: new Map().set("Mon premier critère", true).set("mon deuxième critère", false)
  //  },
  //  {
  //    id: 4,
  //    title: 'Ma quatrième  tâche',
  //    itemId: 1,
  //    item: 'Afficher une quatrième tâche',
  //    personInCharge: 'David Schieffer',
  //    state: 'Done',
  //    acceptanceCriterias: new Map().set("Mon premier critère", true).set("mon deuxième critère", false)
  //  }
  //  ];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(
      result => this.tasks = result,
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
