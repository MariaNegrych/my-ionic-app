import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) {
  }

  getTodos(): Observable<any> {
    return this.httpClient.get<any>('https://api.themoviedb.org/3/discover/movie?page=1&api_key=d30507ed7e8e23e61ef0534c9793348d');
  }
}
