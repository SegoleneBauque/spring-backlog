import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TaskComponent} from "./task/task.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ItemComponent} from "./item/item.component";
import {NewItemComponent} from "./new-item/new-item.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'items', component: NewItemComponent},
  {path: 'items/:id', component: ItemComponent},
  {path: 'tasks/:id', component: TaskComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
