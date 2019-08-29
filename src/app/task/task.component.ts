import {Component, OnDestroy, OnInit} from '@angular/core';
import {Task} from '../task';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {

  task: Task = {
    id: 1,
    title: 'Ma premiere tache',
    itemId: 1,
    item: 'Afficher une tache',
    personInCharge: 'David Schieffer',
    state: 'Todo',
    acceptanceCriteria: new Map().set('Mon premier critere', true).set('mon deuxieme critere', false)
  };

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  toNextStep() {
    switch (this.task.state) {
      case 'Todo':
        this.task.state = 'WIP';
        break;
      case 'WIP':
        this.task.state = 'QA';
        break;
      case 'QA':
        if (this.isAllChecked())
          this.task.state = 'Done';
        break;
      default:
    }
  }

  backToWIP() {
    this.task.state = 'WIP';
  }

  checkCriteria(critere: string) {
    if (this.task.acceptanceCriteria.get(critere) == false)
      this.task.acceptanceCriteria.set(critere, true);
    else
      this.task.acceptanceCriteria.set(critere, false);
  }

  isAllChecked() {
    if (this.task.state == 'QA') {
      for (let critere of this.task.acceptanceCriteria.entries()) {
        if (!critere[1]) {
          return false;
        }
      }
    }
    return true;
  }



}
