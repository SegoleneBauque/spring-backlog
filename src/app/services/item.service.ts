import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Item } from '../item';



@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {}


  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(environment.backUrl + '/items');
  }

  public getItem(id: number): Observable<Item> {
    console.log(environment.backUrl, id)
    return this.http.get<Item>(environment.backUrl + '/items/' + id);
  }

  public addItem(item: Item) {
    return this.http.post(environment.backUrl + '/items', item);
  }

  public editItem(item: Item) {
    return this.http.put(environment.backUrl + '/items/' + item.id, item);
  }

  public deleteItem(id: number) {
    return this.http.delete(environment.backUrl + '/items/' + id);
  }
}
