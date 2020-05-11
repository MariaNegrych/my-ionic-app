import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {CommentResolverService} from './services/comment-resolve/comment-resolve.service';


const routes: Routes = [
  {
    path: '', component: AllCommentsComponent, resolve: {allComments: CommentResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentModuleRoutingModule { }
