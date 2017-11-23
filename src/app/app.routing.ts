import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
   {
   path: 'login',
   loadChildren: './login/login.module'
   },
  {path: 'pages', loadChildren:'./pages/pages.module#PagesModule'},
  {path: '', redirectTo: 'pages', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoute {
}
