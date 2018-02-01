import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

//import { User } from '../../models/user';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
//@Component({
//  selector: 'page-user-details',
//  templateUrl: 'user-details.html'
//  })

@Component({
  template:
  `<ion-header>
    <ion-toolbar>
      <ion-title>
        {{user.first_name}} {{user.last_name}} Details
      </ion-title>
      <ion-buttons start>
        <button ion-button (click)="dismiss()">
          <span ion-text color="primary" showWhen="ios">Cancel</span>
          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
        </button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-list>
        <ion-item *ngFor="let user of users">
          <h2>{{user.username}}</h2>
          <p>{{user.email}}</p>
          <p>{{user.first_name}}</p>
          <p>{{user.last_name}}</p>
          <p>{{user.admin}}</p>
        </ion-item>
    </ion-list>
  </ion-content>`
})
export class UserDetailsPage {
  user;
  id: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    public platform: Platform,
    public viewCtrl: ViewController
    ) {

    }

  ionViewDidLoad(): void {
  //  this.id = this.navParams.get('id');
  //  console.log(this.id);
  //  const id = this.user.get('id');
  //  this.getUser(this.id);
    this.user = this.navParams.get('id');
  }

  getUser(id: string): void {
    this.userProvider.getUser(id).subscribe(
      user => {this.user = user, console.log(this.user)});
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
