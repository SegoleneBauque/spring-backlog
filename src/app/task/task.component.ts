import {Component, OnDestroy, OnInit} from '@angular/core';
import {Task} from '../task';
import {TaskService} from "../services/task.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {

  task: Task;
  //   = {
  //   id: 1,
  //   title: 'Ma premiere tache',
  //   itemId: 1,
  //   item: 'Afficher une tache',
  //   personInCharge: 'David Schieffer',
  //   state: 'Todo',
  //   acceptanceCriterias: new Map().set("Mon premier critere", true).set("mon deuxieme critere", false)
  // };

  constructor(private taskService: TaskService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const taskId = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(taskId).subscribe(
      result => this.task = result,
      error => console.error("Une erreur est survenue", error)
    )
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
    this.taskService.editTask(this.task).subscribe()
  }

  backToWIP() {
    this.task.state = 'WIP';
    this.taskService.editTask(this.task).subscribe()
  }

  toggleCriteria(criteria) {
    criteria.value = !criteria.value
    this.taskService.editTask(this.task).subscribe()
  }

  isAllChecked() {
    if (this.task.state == 'QA') {
      for (let critere of this.task.acceptanceCriterias) {
        if (!critere.value) {
          return false;
        }
      }
    }
    return true;
  }



}
