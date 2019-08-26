import {Component, OnDestroy, OnInit} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {

  task: Task = {
    id: 1,
    titre: 'Ma premiere tache',
    item: 'Afficher une tache',
    personInCharge: 'David Schieffer',
    etat: 'Todo',
    acceptanceCriteria: new Map().set("Mon premier critere", true).set("mon deuxieme critere", false)
  };

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  toNextStep() {
    switch (this.task.etat) {
      case 'Todo':
        this.task.etat = 'WIP';
        break;
      case 'WIP':
        this.task.etat = 'QA';
        break;
      case 'QA':
        this.task.etat = 'Done';
        break;
      default:
    }
  }

  backToWIP() {
    this.task.etat = 'WIP';
  }

  checkCriteria(critere: string) {
    if (this.task.acceptanceCriteria.get(critere) == false)
      this.task.acceptanceCriteria.set(critere, true);
    else
      this.task.acceptanceCriteria.set(critere, false);
  }
}
