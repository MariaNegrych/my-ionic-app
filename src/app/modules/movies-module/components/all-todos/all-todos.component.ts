import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {

  todos: any;

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.data);
    this.todos = this.activatedRoute.snapshot.data.allTodos;
  }

  ngOnInit() {
  }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.todos.length === 10) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
