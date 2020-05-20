import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'page',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../modules/hello/hello.module').then(m => m.HelloModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../modules/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'posts',
        loadChildren: () => import('../modules/post-module/post-module.module').then(m => m.PostModuleModule)
      },
      {
        path: 'comments',
        loadChildren: () => import('../modules/comment-module/comment-module.module').then(m => m.CommentModuleModule)
      },
      {
        path: 'weather',
        loadChildren: () => import('../modules/weather-module/album-module.module').then(m => m.AlbumModuleModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('../modules/movies-module/todos-module.module').then(m => m.TodosModuleModule)
      },
      {
        path: '',
        redirectTo: '/page',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/page/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
