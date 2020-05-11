import { Component, Input, OnInit } from '@angular/core';
import {TodosModel} from '../../../../models/TodosModel';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent{

  @Input()
  todo: TodosModel;

  constructor() {
  }

}
