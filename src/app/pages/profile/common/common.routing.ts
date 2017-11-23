import {Routes, RouterModule} from '@angular/router';
import {CommComponent} from "./common.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: CommComponent,
        children: []
    }
];

export const routing = RouterModule.forChild(routes);
