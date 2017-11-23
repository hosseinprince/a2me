import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProfileComponent} from "./profile.component";

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [{
      path: 'list',
      loadChildren: './list/list.module#ListModule'
    },
      {
        path: 'cur/:id',
        loadChildren: './currency/cur.module#CurModule'
      }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoute {
}

