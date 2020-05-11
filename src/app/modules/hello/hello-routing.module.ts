import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloComponent} from './components/hello/hello.component';

import {CanActivateService} from './services/can-activate.service';
import {UserInfoComponent} from '../users/user-info/user-info.component';
import {InfoResolverService} from '../users/services/user-info-service/info.resolver.service';



// @ts-ignore
const routes: Routes = [
  {path: '', component: HelloComponent, children: [
      // {path: 'info/:id', loadChildren: () => import('../../modules/user-module/user.module').then(m => m.UserModule)}
    {path: 'info/:id',
      component: UserInfoComponent,
      resolve: {userInfo: InfoResolverService},
      canActivate:  [CanActivateService]}
      ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule { }
