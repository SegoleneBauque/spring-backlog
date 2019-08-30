import { Component, OnInit } from '@angular/core';
import {ItemService} from "../services/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Item} from "../item";

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  item: Item;
  model: FormGroup;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.model = this.formBuilder.group({
      title: [''],
      userStory: ['']
    })
  }

  createNewItem() {
    const newItem = this.formBuilder.group({
      title: this.title,
      userStory: this.userStory,
      tasks: []
    });
    this.itemService.addItem(newItem.value).subscribe( result => this.router.navigateByUrl('/'));
  }

  get title() {
    return this.model.get('title');
  }

  get userStory() {
    return this.model.get('userStory');
  }
}
