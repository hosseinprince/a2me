import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {HomeRoute}       from './home.routing';
import {HomeComponent} from "./home.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRoute
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
