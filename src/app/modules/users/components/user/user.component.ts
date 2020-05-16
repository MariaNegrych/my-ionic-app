import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserModel} from '../../../../models/UserModel';
import {PostModel} from '../../../../models/PostModel';
import {UserService} from '../../services/user/user.service';
import {LoadingController} from '@ionic/angular';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: UserModel;
  xxx: any;
  users: UserModel[];

  @Output()
  forwardUserData = new EventEmitter();
  post: PostModel;
  IsHidden = true;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              public loadingController: LoadingController) {
  }

  ngOnInit(): void {
  }

  async navigate(user: UserModel) {

    this.forwardUserData.emit(user);
    // users/1/posts?userId=1
    this.router.navigate([user.id, 'posts'],
        {
          state: {user},
          queryParams: {userId: user.id},
          // users/1/posts
          relativeTo: this.activatedRoute
        });
    const loading = await this.loadingController.create({
          message: 'Please wait...',
          duration: 200
      });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  showDetails() {
      this.IsHidden = !this.IsHidden;
  }
}
