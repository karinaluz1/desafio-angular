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
import { IndicacoesService } from 'src/app/shared/services/indicacoes.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';


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
    FormsModule,
    HttpClientModule,
    SharedModule
  ], providers: [IndicacoesService]
})
export class IndicacoesModule { }
