import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserModel} from '../../../../models/UserModel';
import {UserService} from '../../services/user/user.service';
import {IonInfiniteScroll, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: UserModel[];
  xxx: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              public loadingController: LoadingController) {
    console.log(this.activatedRoute.snapshot.data);
    // this.users = this.activatedRoute.snapshot.data.allUsers; or:
    this.activatedRoute.data.subscribe(value => {this.users = value.users as UserModel[];
    });
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.users.length === 10) {
        event.target.disabled = true;
      }
    }, 500);
  }
  ngOnInit() {
  }

  catchUserData(user: any) {
    console.log(user);
    this.xxx = user;
  }

  async gotoHome() {
    this.router.navigate(['/page/home']);
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 10
    });
    await loading.present();

    const {role, data} = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}

