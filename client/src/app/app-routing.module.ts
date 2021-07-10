import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'login',
    loadChildren : () => import('./pages/login/login.module').then (m => m.LoginModule)
  },
  {
    path : 'logout',
    loadChildren : () => import('./pages/logout/logout.module').then (m => m.LogoutModule)
  },
  {
    path : 'register',
    loadChildren : () => import('./pages/register/register.module').then (m => (m.RegisterModule))
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path : '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
