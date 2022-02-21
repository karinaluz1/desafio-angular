import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicacoesComponent } from './pages/indicacoes/indicacoes.component';
import { NovaIndicacaoComponent } from './pages/nova-indicacao/nova-indicacao.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: IndicacoesComponent
  },
  {
    path: 'cadastrar',
    component: NovaIndicacaoComponent
  },
  {
    path: 'detalhes/:id',
    component: DetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicacoesRoutingModule { }
