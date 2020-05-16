import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostModel} from '../../../../models/PostModel';
import {PostService} from '../../services/post/post.service';
import {UserModel} from '../../../../models/UserModel';
import {IonInfiniteScroll, LoadingController} from '@ionic/angular';


@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: PostModel[];
  user: UserModel;
  url: string;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public loadingController: LoadingController) {


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
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.posts.length === 100) {
        event.target.disabled = true;
      }
    }, 500);
  }
  async gotoUsers() {
    this.router.navigate(['/page/users']);
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 10
    });
    await loading.present();

    const {role, data} = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  ngOnInit(): void {
  }


}

