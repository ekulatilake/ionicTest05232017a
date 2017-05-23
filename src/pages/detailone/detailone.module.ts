import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Detailone } from './detailone';

@NgModule({
  declarations: [
    Detailone,
  ],
  imports: [
   IonicPageModule.forChild(Detailone),
  ],
  exports: [
    Detailone
  ]
})

export class DetailoneModule {}
