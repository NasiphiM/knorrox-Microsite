import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartNewPage } from './start-new.page';

const routes: Routes = [
  {
    path: '',
    component: StartNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartNewPageRoutingModule {}
