import { NgModule }      from '@angular/core';

import {ListRoute} from "./list.routing";
import {ListComponent} from "./list.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    ListRoute,
    FormsModule,
    CommonModule
  ],
  declarations: [
    ListComponent
  ],
  providers: [ ],

})
export class ListModule {

}
