import { NgModule }      from '@angular/core';

import {Pages} from './pages.component';
import {NavComponent} from "./nav/nav.component";
import {PagesRoute} from "./pages.routing";
import {SidebarModule} from "primeng/primeng";

@NgModule({
  imports: [PagesRoute,SidebarModule],
  declarations: [Pages,NavComponent]

})
export class PagesModule {
}
