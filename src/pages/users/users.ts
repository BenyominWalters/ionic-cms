import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

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
    private userProvider: UserProvider,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    this.getUsers();
    this.userProvider.getUser();
    this.userProvider.editUser();
    this.userProvider.createUser();
    this.userProvider.deleteUser();
  }

  getUsers(): void {
      this.userProvider.getUsers().subscribe(
        (response) => {
          this.users = response.users,
          console.log(this.users)
        }
      );
    }

  openModal(id) {
    let modal = this.modalCtrl.create(UserDetailsPage, id);
    modal.present();
  }

}
