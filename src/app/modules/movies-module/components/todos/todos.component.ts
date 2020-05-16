import {Component, Input} from '@angular/core';
import {MovieModel} from '../../../../models/TodosModel';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  @Input()
  todo: MovieModel;
  IsHidden = true;

  constructor() {
  }

  showDetails() {
    this.IsHidden = !this.IsHidden;
  }
}
