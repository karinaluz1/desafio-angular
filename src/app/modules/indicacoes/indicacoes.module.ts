import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicacoesRoutingModule } from './indicacoes-routing.module';
import { IndicacoesComponent } from './pages/indicacoes/indicacoes.component';


@NgModule({
  declarations: [
    IndicacoesComponent
  ],
  imports: [
    CommonModule,
    IndicacoesRoutingModule
  ], exports: [
    IndicacoesComponent
  ]
})
export class IndicacoesModule { }
