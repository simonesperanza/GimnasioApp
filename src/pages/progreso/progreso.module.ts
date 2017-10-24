import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgresoPage } from './progreso';

@NgModule({
  declarations: [
    ProgresoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgresoPage),
  ],
})
export class ProgresoPageModule {}
