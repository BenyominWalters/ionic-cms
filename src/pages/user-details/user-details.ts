import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {

  user: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider
    ) {
  }

  ionViewDidLoad() {
      this.getUser(this.navParams.data);
  }

  getUser(id: string): void {
     this.userProvider.getUser(id).subscribe(
       user => {this.user = user.user, console.log(this.user)});
   }

}
