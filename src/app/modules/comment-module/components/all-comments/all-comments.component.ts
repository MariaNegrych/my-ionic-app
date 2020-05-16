import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentModel} from '../../../../models/CommentModel';
import {CommentService} from '../../services/comment/comment.service';
import {PostModel} from '../../../../models/PostModel';
import {PostService} from '../../../post-module/services/post/post.service';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  @Input()
  comments: CommentModel[];


  constructor(private commentService: CommentService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public loadingController: LoadingController) {
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
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.comments.length === 500) {
        event.target.disabled = true;
      }
    }, 500);
  }
  async gotoPosts() {
    this.router.navigate(['/page/posts']);
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 10
    });
    await loading.present();

    const{role, data} = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}

