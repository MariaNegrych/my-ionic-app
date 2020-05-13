import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TodosModel} from '../../../../models/TodosModel';


@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {

  todos: any;
  // allTodos: any;


  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.data);
    this.todos = this.activatedRoute.snapshot.data.allTodos;
  }

  ngOnInit() {
  }

}
