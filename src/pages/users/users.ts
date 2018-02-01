import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';

import { User } from '../../models/user';
import { UserDetailsPage } from '../user-details/user-details';


@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider
  ) {}

  ionViewDidLoad() {
    this.getUsers();
  }

  getUsers(): void {
      this.userProvider.getUsers().subscribe(
        (response) => {
          this.users = response.users,
          console.log(this.users)
        }
      );
    }

  userTapped(event, user) {
      this.navCtrl.push(UserDetailsPage, user._id);
      }

}
