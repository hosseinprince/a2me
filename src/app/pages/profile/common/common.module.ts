import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms';
import {CommComponent} from "./common.component";
import {routing} from "./common.routing";

@NgModule({
    imports: [
        CommonModule,
        routing,
        FormsModule
    ],
    declarations: [
        CommComponent
    ]
})
export default class CommModule {
}
