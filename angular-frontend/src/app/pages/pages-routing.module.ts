import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserViewComponent} from './users/user-view/user-view.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        {
            path: 'users',
            component: UserListComponent,
        },
        {
            path: 'users/:id',
            component: UserViewComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
