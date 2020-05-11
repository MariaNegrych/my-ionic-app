import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TodosService} from '../todos/todos.service';
import {TodosModel} from '../../../../models/TodosModel';


@Injectable({
  providedIn: 'root'
})

export class TodosResolverService implements Resolve<TodosModel[]>{

  constructor(private todosService: TodosService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TodosModel[]> | Promise<TodosModel[]> | TodosModel[] {
    return this.todosService.getTodos();
  }
}
