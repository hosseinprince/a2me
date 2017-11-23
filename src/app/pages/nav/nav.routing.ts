import {Routes, RouterModule} from '@angular/router';
import {NavComponent} from "./nav.component";
import {NgModule} from "@angular/core";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: NavComponent,
        children: []
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoute {
}
