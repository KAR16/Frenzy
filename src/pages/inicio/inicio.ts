import { Component } from '@angular/core';
import { ModalController, ViewController, NavParams } from 'ionic-angular';
import { Pregunta1Page } from '../pregunta1/pregunta1'
import { ModalPage } from '../modal/modal'

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  constructor(public modalCtrl: ModalController, public viewCtrl: ViewController, public params: NavParams ) {
  }

  openPregunta1() {
    let modal = this.modalCtrl.create(Pregunta1Page);
    modal.present();
  }

  modalCode() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

}
