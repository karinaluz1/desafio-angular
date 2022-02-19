import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicacoesComponent } from './pages/indicacoes/indicacoes.component';

const routes: Routes = [
  {
    path: '',
    component: IndicacoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicacoesRoutingModule { }
