import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersModule} from './users/users.module';
import {PagesComponent} from './pages.component';


@NgModule({
    declarations: [PagesComponent],
    imports: [
        CommonModule,
        UsersModule,
    ]
})
export class PagesModule {
}
