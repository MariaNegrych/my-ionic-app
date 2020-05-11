import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PostService} from '../post/post.service';
import {PostModel} from '../../../../models/PostModel';


@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<PostModel[]> {

  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> | Promise<PostModel[]> | PostModel[] {
    // const id = +route.paramMap.get('id');
    const id = route.queryParamMap.get('userId');
    console.log(id);
    if (id) {
      return this.postService.getPostsOfUserById(+id);
    } else {
      return this.postService.getPosts();
    }
  }
}
