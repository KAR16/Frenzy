import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { PuntosPage } from '../pages/puntos/puntos';
import { PremiosPage } from '../pages/premios/premios';
import { TabsPage } from '../pages/tabs/tabs';
import { Pregunta1Page } from '../pages/pregunta1/pregunta1'
import { ModalPage } from '../pages/modal/modal'

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    FavoritosPage,
    PuntosPage,
    PremiosPage,
    TabsPage,
    Pregunta1Page,
    ModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    FavoritosPage,
    PuntosPage,
    PremiosPage,
    TabsPage,
    Pregunta1Page,
    ModalPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
