import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {parse} from 'ts-node';
import {UserModel} from '../../../models/UserModel';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input()
  user: UserModel;
  allUser: UserModel[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
     // this.activatedRoute.data.subscribe(value => this.user = value);
    //  this.user = this.activatedRoute.snapshot.data.userInfo;
    this.activatedRoute.data.subscribe(value => {
      this.user = value.userInfo as UserModel;

      if (!localStorage.getItem('user')) {
        this.allUser.push(this.user)
        localStorage.setItem('user', JSON.stringify(this.allUser));
      } else {
        const usersJSON = localStorage.getItem('user');
        const users = JSON.parse(usersJSON);
        users.push(this.user);
        // const value = JSON.stringify(array);
        // const user = JSON.stringify(users)
        localStorage.setItem('user', JSON.stringify(users));
      }
      // this.allUser.push(this.user)
      // localStorage.setItem('user', JSON.stringify(this.allUser))

      // localStorage.clear();
    });
  }

  ngOnInit(): void {
  }

}
