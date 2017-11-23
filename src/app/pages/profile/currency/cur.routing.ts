import {Routes, RouterModule} from '@angular/router';
import {CurComponent} from "./cur.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: CurComponent,
        children: []
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CurRoute {
}
