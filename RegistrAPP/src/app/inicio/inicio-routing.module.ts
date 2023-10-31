import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { inicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: inicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class inicioPageRoutingModule {}
