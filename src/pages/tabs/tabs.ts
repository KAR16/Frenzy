import { Component } from '@angular/core';

import { InicioPage } from '../inicio/inicio';
import { FavoritosPage } from '../favoritos/favoritos';
import { PuntosPage } from '../puntos/puntos';
import { PremiosPage } from '../premios/premios';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = InicioPage;
  tab2Root: any = FavoritosPage;
  tab3Root: any = PuntosPage;
  tab4Root: any = PremiosPage;

  constructor() {

  }
}
