import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserResolverService} from './services/user-resolve/user-resolve.service';
import {AllPostsComponent} from '../post-module/components/all-posts/all-posts.component';
import {PostResolveService} from '../post-module/services/post-resolve/post-resolve.service';


const routes: Routes = [
  {path: '', component: AllUsersComponent, resolve: {users: UserResolverService}, children: [
      // {path: ':id', loadChildren: () => import('../post-module/post-module.module').then(m => m.PostModuleModule)}
    ]},
    {path: ':id', loadChildren: () => import('../post-module/post-module.module').then(m => m.PostModuleModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
