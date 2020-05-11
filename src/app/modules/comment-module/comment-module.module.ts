import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentModuleRoutingModule } from './comment-module-routing.module';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [
    AllCommentsComponent,
    CommentComponent
  ],
  exports: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentModuleRoutingModule,
    IonicModule
  ]
})
export class CommentModuleModule { }
