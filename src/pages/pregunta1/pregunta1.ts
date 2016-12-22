import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-pregunta1',
  templateUrl: 'pregunta1.html'
})
export class Pregunta1Page {

  constructor(public navCtrl: NavController, public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {

  }

  dismiss() {
      this.viewCtrl.dismiss();
  }

}
