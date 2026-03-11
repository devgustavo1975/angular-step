import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RotasComponent } from './pages/rotas/rotas.component';
import { PainelAdmComponent } from './pages/painel-adm/painel-adm.component';
import { FreteComponent } from './pages/frete/frete.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'rotas', component: RotasComponent },
  { path: 'painel-adm', component: PainelAdmComponent },
  { path: 'frete', component: FreteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
