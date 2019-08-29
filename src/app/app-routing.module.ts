import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'items/:id', component: ItemComponent},
  {path: 'tasks/:id', component: TaskComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
