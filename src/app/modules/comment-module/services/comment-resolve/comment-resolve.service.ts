import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CommentService} from '../comment/comment.service';
import {CommentModel} from '../../../../models/CommentModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService implements Resolve<CommentModel[]>{

  constructor(private commentService: CommentService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentModel[]> {
    const id = route.queryParamMap.get('postId');
    console.log(id);
    if (id) {
      return this.commentService.getPostComments(+id);
    } else {
      return this.commentService.getAllComments();
    }
  }
}
