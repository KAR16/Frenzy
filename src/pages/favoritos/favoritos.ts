import { Component } from '@angular/core';

import { Platform, /*NavController*/ } from 'ionic-angular';


@Component({
  templateUrl: 'favoritos.html'
})
export class FavoritosPage {
  favoritos: string = "marcas";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
