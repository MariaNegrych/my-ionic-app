import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserModel} from '../../../../models/UserModel';
import {PostModel} from '../../../../models/PostModel';
import {UserService} from '../../services/user/user.service';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: UserModel;
  xxx: any;

  @Output()
  forwardUserData = new EventEmitter();
  post: PostModel;
  IsHidden= true;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  navigate(user: UserModel) {

    this.forwardUserData.emit(user);
    // users/1/posts?userId=1
    this.router.navigate([user.id, 'posts'],
        {
          state: {user},
          queryParams: {userId: user.id},
          // users/1/posts
          relativeTo: this.activatedRoute
        });
  }
  showDetails(user: UserModel) {
      this.IsHidden= !this.IsHidden;
      if (!this.IsHidden) {
          this.userService.getUser(user.id).subscribe(value => this.xxx = value);
      } else {
          return null;
      }
  }
}
