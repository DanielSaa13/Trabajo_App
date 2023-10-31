import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { inicioPageRoutingModule } from './inicio-routing.module';

import { inicioPage } from './inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    inicioPageRoutingModule
  ],
  declarations: [inicioPage]
})
export class inicioPageModule {}
