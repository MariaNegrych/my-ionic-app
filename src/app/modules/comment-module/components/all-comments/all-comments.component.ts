import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentModel} from '../../../../models/CommentModel';
import {CommentService} from '../../services/comment/comment.service';
import {PostModel} from '../../../../models/PostModel';
import {PostService} from '../../../post-module/services/post/post.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  @Input()
  comments: CommentModel[];


  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute, private router: Router) {
    // get from resolver
      this.comments = this.activatedRoute.snapshot.data.allComments;

// render post of user
      this.activatedRoute.queryParams  // /users/:id/posts
      .subscribe(value => {
        if (!!value.id) {
          this.commentService.getPostComments(value.id).subscribe(value1 => {this.comments = value1;
          });
        }
      });
  }

  ngOnInit() {
  }

  gotoPosts() {
    this.router.navigate(['/page/posts']);
  }

}

