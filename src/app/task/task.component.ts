import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  id: number = 1;
  titre: string = 'première tâche';
  item: string = "première étape de l'appli";
  personInCharge: string = "David Schieffer";
  etat: string = 'Todo';
  definitionOfDone: string = 'Moi en tant que développeur, je veux voir apparaître ma première tâche sur mon application Angular';

  constructor() { }

  ngOnInit() {
  }

}
