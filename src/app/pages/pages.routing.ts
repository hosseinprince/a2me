import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Pages} from './pages.component';

const routes: Routes = [
  {
    path: '', component: Pages,
    children: [
      {
        path: 'profile', loadChildren:'./profile/profile.module#ProfileModule'
      },
      {
        path: 'status', loadChildren:'./test/test.module#TestModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoute {
}
