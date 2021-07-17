import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";


const routes: Routes = [
  {
    path : 'app-login',
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
    loadChildren: () => import('./pages/login/login.module').then(m =>m.LoginModule)
  },
  {
    path : '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
