import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Gráficos
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { RutinaPage } from '../pages/rutina/rutina';
import { ProgresoPage } from '../pages/progreso/progreso';
import { ClasesPage } from '../pages/clases/clases';
import { EntrenadoresPage } from '../pages/entrenadores/entrenadores';
import { ConectaPage } from '../pages/conecta/conecta';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { LineaComponent } from '../components/linea/linea';
import { BarraComponent } from '../components/barra/barra';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    RutinaPage,
    ProgresoPage,
    ClasesPage,
    EntrenadoresPage,
    ConectaPage,
    ConfiguracionPage,
    LineaComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    RutinaPage,
    ProgresoPage,
    ClasesPage,
    EntrenadoresPage,
    ConectaPage,
    ConfiguracionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
