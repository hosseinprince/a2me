import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: []
    }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomeRoute {}
