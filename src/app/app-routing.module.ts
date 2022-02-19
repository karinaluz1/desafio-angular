import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'indicacoes'
  }, {
    path: 'indicacoes',
    loadChildren: () => import('./modules/indicacoes/indicacoes.module').then((m) => m.IndicacoesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
