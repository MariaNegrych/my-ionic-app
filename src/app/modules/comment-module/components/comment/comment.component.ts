import {Component, Input, OnInit} from '@angular/core';
import {CommentModel} from '../../../../models/CommentModel';
import {PostModel} from '../../../../models/PostModel';
import {PostService} from '../../../post-module/services/post/post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: CommentModel;
  post: PostModel;
  IsHidden = true;


  constructor(private postService: PostService) {

  }

  ngOnInit() {
  }

  showPostOfComment(comment: CommentModel) {
    this.IsHidden = !this.IsHidden;
    if (!this.IsHidden){
      this.postService.getPost(comment.postId).subscribe(value => this.post = value);
    } else {
      return null;
    }
  }}

