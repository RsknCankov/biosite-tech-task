import {Component} from '@angular/core';

@Component({
    selector: 'app-pages',
    template: `
        <app-one-column-layout>
            <router-outlet></router-outlet>
        </app-one-column-layout>
    `,
})
export class PagesComponent {
    constructor() {
    }
}
