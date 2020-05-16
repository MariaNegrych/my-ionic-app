import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosModuleRoutingModule } from './todos-module-routing.module';
import {AllTodosComponent} from './components/all-todos/all-todos.component';
import {TodosComponent} from './components/todos/todos.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [
    AllTodosComponent,
    TodosComponent
  ],
    imports: [
        CommonModule,
        TodosModuleRoutingModule,
        IonicModule
    ]
})
export class TodosModuleModule { }
