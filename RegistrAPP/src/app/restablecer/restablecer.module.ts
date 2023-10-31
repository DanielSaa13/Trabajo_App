import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { restablecerPageRoutingModule } from './restablecer-routing.module';

import { restablecerPage } from './restablecer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    restablecerPageRoutingModule
  ],
  declarations: [restablecerPage]
})
export class restablecerPageModule {}
