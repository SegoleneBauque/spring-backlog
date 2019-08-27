import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "../task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  static readonly BACK = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  public createTask(task: Task) {
    return this.http.post(TaskService.BACK + 'tasks', task);
  }

}
