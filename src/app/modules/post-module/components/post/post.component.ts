import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../../../models/PostModel';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../services/post/post.service';
import {CommentService} from '../../../comment-module/services/comment/comment.service';
import {UserModel} from '../../../../models/UserModel';
import {CommentModel} from '../../../../models/CommentModel';
import {LoadingController} from '@ionic/angular';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: PostModel;
  comments: CommentModel[];

  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async navigate(post: PostModel) {
    this.router.navigate([post.id, 'comments'],
        {
          state: {post},
          queryParams: {postId: post.id},
          relativeTo: this.activatedRoute
        });
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 200
    });
    await loading.present();

    const {role, data} = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}



