import { NgModule }      from '@angular/core';


import {CommonModule} from "@angular/common";
import {TestComponent} from "./test.component";
import {TestRoute} from "./test.routing";

@NgModule({
  imports: [
    TestRoute,
    CommonModule
  ],
  declarations: [
    TestComponent
  ],
  providers: [ ],
})

export class TestModule {
}
