import {Component, Input, OnInit} from '@angular/core';
import {TodosModel} from '../../../../models/TodosModel';
import {TodosService} from '../../services/todos/todos.service';


@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  @Input()
  todo: TodosModel;
  IsHidden = true;

  constructor(private todosService: TodosService) {
  }

  showDetails() {
    this.IsHidden = !this.IsHidden;
    // if (!this.IsHidden) {
    //   this.todosService.getTodo(todo.id).subscribe(value => this.xxx = value);
    // } else {
    //   return null;
    // }
  }
}
