import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestingComponent } from './testing.component';

export const routes: Routes = [
  {
    path: '',
    component: TestingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingRoutingModule { }
