import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsUsuarioPageRoutingModule } from './details-usuario-routing.module';

import { DetailsUsuarioPage } from './details-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsUsuarioPageRoutingModule
  ],
  declarations: [DetailsUsuarioPage]
})
export class DetailsUsuarioPageModule {}
