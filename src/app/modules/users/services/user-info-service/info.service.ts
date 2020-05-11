import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../../../../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private httpClient: HttpClient) {}

  getUser(id: number): Observable<UserModel>{
    return this.httpClient.get<UserModel>(`http://jsonplaceholder.typicode.com/users/${id}`);
  }
}
