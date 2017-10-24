import { NgModule } from '@angular/core';
import { LineaComponent } from './linea/linea';
import { BarraComponent } from './barra/barra';

@NgModule({
	declarations: [
    LineaComponent,
    BarraComponent
    ],
	imports: [],
	exports: [
    LineaComponent,
    BarraComponent
    ]
})
export class ComponentsModule {}
