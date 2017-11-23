import {CUSTOM_ELEMENTS_SCHEMA, NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {NavComponent} from "./nav.component";
import {NavRoute} from "./nav.routing";


@NgModule({
  imports: [
    CommonModule,
    NavRoute
  ],
  declarations: [
    NavComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]

})
export class NavModule {
}
