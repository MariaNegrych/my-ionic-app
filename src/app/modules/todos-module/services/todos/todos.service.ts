import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TodosModel} from '../../../../models/TodosModel';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) {
  }
  getTodos(): Observable<any>{
    return this.httpClient.get<any>('https://api.themoviedb.org/3/discover/movie?page=1&api_key=d30507ed7e8e23e61ef0534c9793348d');
  }
  getTodo(id): Observable<any>{
    return this.httpClient.get<any>(`https://api.themoviedb.org/3/discover/movie/${id}?page=1&api_key=d30507ed7e8e23e61ef0534c9793348d`);
  }



  // constructor(private http: HttpClient) {
  // }
  // getTodos(): Observable<TodosModel[]> {
  //   return this.http.get<TodosModel[]>('https://jsonplaceholder.typicode.com/todos');
  // }
}
