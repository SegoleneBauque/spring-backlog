import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})


export class ItemComponent implements OnInit {




item: Item;

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    console.log(this.router.url)
    const itemId = +this.route.snapshot.paramMap.get('id');

    this.itemService.getItem(itemId).subscribe(result => this.item = result,
      error => console.error('une erreur est survenue', error));
      }

}


