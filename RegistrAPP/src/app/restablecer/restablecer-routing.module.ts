import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { restablecerPage } from './restablecer.page';

const routes: Routes = [
  {
    path: '',
    component: restablecerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class restablecerPageRoutingModule {}
