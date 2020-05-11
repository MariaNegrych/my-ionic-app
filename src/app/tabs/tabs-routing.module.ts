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
        // loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
        loadChildren: () => import('../modules/hello/hello.module').then(m => m.HelloModule)
      },
      {
        path: 'users',
        // loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
        loadChildren: () => import('../modules/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'posts',
        // loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
        loadChildren: () => import('../modules/post-module/post-module.module').then(m => m.PostModuleModule)
      },
      {
        path: 'comments',
        // loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
        loadChildren: () => import('../modules/comment-module/comment-module.module').then(m => m.CommentModuleModule)
      },
      {
        path: 'albums',
        loadChildren: () => import('../modules/album-module/album-module.module').then(m => m.AlbumModuleModule)
      },
      {
        path: 'todos',
        loadChildren: () => import('../modules/todos-module/todos-module.module').then(m => m.TodosModuleModule)
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
