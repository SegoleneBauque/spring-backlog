import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskComponent } from '../task/task.component';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  static readonly BACK = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

 

}
