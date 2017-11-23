import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogModule} from 'primeng/primeng';

import {FormsModule} from '@angular/forms';
import {CurComponent} from "./cur.component";
import {CommComponent} from "../common/common.component";
import {CurRoute} from "./cur.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    CurRoute
  ],
  declarations: [
    CurComponent,
    CommComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class CurModule {
}
