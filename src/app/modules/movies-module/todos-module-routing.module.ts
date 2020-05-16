import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllTodosComponent} from './components/all-todos/all-todos.component';
import {TodosResolverService} from './services/todos-resolve/todos-resolve.service';


const routes: Routes = [
  {path: '', component: AllTodosComponent, resolve: {allTodos : TodosResolverService}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosModuleRoutingModule { }
