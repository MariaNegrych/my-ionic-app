import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {IonicModule} from '@ionic/angular';
import {UserComponent} from './components/user/user.component';
import {AllPostsComponent} from '../post-module/components/all-posts/all-posts.component';


@NgModule({
  declarations: [
      AllUsersComponent,
      UserComponent,
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        IonicModule
    ]
})
export class UsersModule { }
