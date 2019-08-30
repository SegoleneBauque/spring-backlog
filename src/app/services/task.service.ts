import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "../task";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(environment.backUrl + '/tasks');
  }

  public getTask(id: number): Observable<Task> {
    return this.http.get<Task>(environment.backUrl + '/tasks/' + id);
  }

  public createTask(task: Task) {
    return this.http.post(environment.backUrl + '/tasks', task);
  }

  public deleteTask(id: number) {
    return this.http.delete(environment.backUrl + '/tasks/' + id);
  }

  public editTask(task: Task) {
    return this.http.put(environment.backUrl + '/tasks/' + task.id, task);
  }


}
