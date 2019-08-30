import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Item} from '../item';
import {ItemService} from '../services/item.service';
import {Task} from "../task";
import {TaskService} from "../services/task.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})


export class ItemComponent implements OnInit {
  item: Item;
  tasks: Task[];
  model: FormGroup;
  newAcceptanceCriterias: Array<{ key: string, value: boolean }>;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private router: Router,
              private taskService: TaskService,
              private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    const itemId = +this.route.snapshot.paramMap.get("id");
    this.itemService.getItem(itemId).subscribe(result => this.item = result,
      error => console.error("une erreur est survenue", error));

    this.taskService.getTasks().subscribe(
      result => this.tasks = result,
      error => console.error("Une erreur est survenue", error))

    this.newAcceptanceCriterias = [];

    this.model = this.formBuilder.group({
      title: [''],
      acceptanceCriterias: [['']],
      newCriteriaTitle: [''],
      personInCharge: ['']
    })
  }

  createNewTask() {
    const newTask = this.formBuilder.group({
      title: this.title,
      state: 'Todo',
      itemId: this.item.id,
      item: this.item.title,
      personInCharge: this.personInCharge,
      acceptanceCriterias: [this.newAcceptanceCriterias]
    });
    this.taskService.createTask(newTask.value).subscribe(result => this.router.navigateByUrl('/'));
  }

  get title() {
    return this.model.get('title')
  }

  get personInCharge() {
    return this.model.get('personInCharge')
  }

  addNewCriteria(newCriteriaTitle) {
    this.newAcceptanceCriterias.push({key: newCriteriaTitle.value, value: false})
    newCriteriaTitle.value = '';
  }
}


