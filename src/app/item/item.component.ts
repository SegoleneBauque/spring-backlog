import { Component, OnInit, Input } from '@angular/core';
import { item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})


export class ItemComponent implements OnInit {



item: item = {
  id :  1,
  title : "Bouton pour le client",
userStory : 'Je souhaite appuyer sur le bouton avec ma souris'
}
  constructor() {

   }

  ngOnInit() {}

}


