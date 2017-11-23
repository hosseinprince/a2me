import { NgModule }      from '@angular/core';

import {ProfileRoute} from "./profile.routing";
import {ProfileComponent} from "./profile.component";

import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    ProfileRoute,
    CommonModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [ ],
})

export class ProfileModule {
}
