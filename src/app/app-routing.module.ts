import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoAuthGuard } from '@app/guard/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'testing',
    pathMatch: 'full'
  },
  {
    path: 'testing',
    data: {
      breadcrumb: 'Logging'
    },
    loadChildren: () => import('@modules/testing/testing.module').then(m => m.TestingModule),
    canActivate: [NoAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
