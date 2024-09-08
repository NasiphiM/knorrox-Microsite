import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartNewPageRoutingModule } from './start-new-routing.module';

import { StartNewPage } from './start-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartNewPageRoutingModule
  ],
  declarations: [StartNewPage]
})
export class StartNewPageModule {}
