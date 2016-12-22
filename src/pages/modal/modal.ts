import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {

  constructor(public navCtrl: NavController, public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
  }

  dismiss() {
      this.viewCtrl.dismiss();
  }


}
