import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicacoesRoutingModule } from './indicacoes-routing.module';
import { IndicacoesComponent } from './pages/indicacoes/indicacoes.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    IndicacoesComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    IndicacoesRoutingModule
  ], exports: [
    IndicacoesComponent
  ]
})
export class IndicacoesModule { }
