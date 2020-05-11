import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserModel} from '../../../../models/UserModel';
import {UserService} from '../../services/user/user.service';



@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  // users: UserModel[];
  //
  // constructor(private userService: UserService) {
  //   userService.getUsers().subscribe(value => this.users = value);
  // }
  // ngOnInit(): void {
  // }
  users: UserModel[];
  xxx: any;


  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    console.log(this.activatedRoute.snapshot.data);
    // this.users = this.activatedRoute.snapshot.data.allUsers; or:
    this.activatedRoute.data.subscribe(value => {this.users = value.users as UserModel[];
    });
  }

  ngOnInit() {
  }

  catchUserData(user: any) {
    console.log(user);
    this.xxx = user;
  }

  gotoHome() {
    this.router.navigate(['/page/home']);
  }
}

