import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { RutinaPage } from '../pages/rutina/rutina';
import { ProgresoPage } from '../pages/progreso/progreso';
import { ClasesPage } from '../pages/clases/clases';
import { EntrenadoresPage } from '../pages/entrenadores/entrenadores';
import { ConectaPage } from '../pages/conecta/conecta';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  public rootPage: any;
  public pages: Array< { titulo: string, component: any, icon:string } >;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    this.rootPage = InicioPage;
    this.pages = [
      { titulo: "Inicio", component: InicioPage, icon: "home"},
      { titulo: "Rutina", component: RutinaPage, icon: "calendar"},
      { titulo: "Progreso", component: ProgresoPage, icon: "stats"},
      { titulo: "Clases", component: ClasesPage, icon: "bicycle"},
      { titulo: "Entrenadores", component: EntrenadoresPage, icon: "contact"},
      { titulo: "Conecta", component: ConectaPage, icon: "chatbubbles"},
      { titulo: "Configuración", component: ConfiguracionPage, icon: "settings"}
      
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }
}

