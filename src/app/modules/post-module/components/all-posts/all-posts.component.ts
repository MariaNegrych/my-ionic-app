import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostModel} from '../../../../models/PostModel';
import {PostService} from '../../services/post/post.service';
import {UserModel} from '../../../../models/UserModel';


@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})

export class AllPostsComponent implements OnInit {

  posts: PostModel[];
  user: UserModel

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {


    // this.activatedRoute
    //   .params
    //   .subscribe(params =>
    //     this.postService
    //       .getPostsOfUserById(params.id)
    //       .subscribe(postsFromServer => {
    //         if (postsFromServer.length) {
    //           this.posts = postsFromServer;
    //         }
    //       }));

    this.activatedRoute.data.subscribe(value => {
      this.posts = value.allPosts;
    });


    //
    // this.activatedRoute.queryParams.subscribe(queyParams =>
    //   this.postService
    //     .getPostsOfUserById(queyParams.idOfUser)
    //     .subscribe(value => console.log(value))
    // );
    //
    // this.postService
    //   .getPostsOfUserById(this.router.getCurrentNavigation().extras.state.user.id)
    //   .subscribe(value => console.log(value));

  }

  ngOnInit() {
  }

  gotoUsers() {
    this.router.navigate(['/page/users']);
  }
}
