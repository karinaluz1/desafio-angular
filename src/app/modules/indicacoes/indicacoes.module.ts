import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicacoesRoutingModule } from './indicacoes-routing.module';
import { IndicacoesComponent } from './pages/indicacoes/indicacoes.component';
import { CardComponent } from './components/card/card.component';
import { ListaCardComponent } from './components/lista-card/lista-card.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { NovaIndicacaoComponent } from './pages/nova-indicacao/nova-indicacao.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndicacoesComponent,
    CardComponent,
    ListaCardComponent,
    TabelaComponent,
    NovaIndicacaoComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    IndicacoesRoutingModule,
    FormsModule
  ]
})
export class IndicacoesModule { }
