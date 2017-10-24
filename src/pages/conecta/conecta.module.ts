import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConectaPage } from './conecta';

@NgModule({
  declarations: [
    ConectaPage,
  ],
  imports: [
    IonicPageModule.forChild(ConectaPage),
  ],
})
export class ConectaPageModule {}
