import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostModuleRoutingModule } from './post-module-routing.module';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PostComponent} from './components/post/post.component';
import {IonicModule} from '@ionic/angular';
import {CommentModuleModule} from '../comment-module/comment-module.module';


@NgModule({
  declarations: [
    AllPostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostModuleRoutingModule,
    IonicModule,
    CommentModuleModule
  ]
})
export class PostModuleModule { }
