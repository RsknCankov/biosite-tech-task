import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'pages', canActivate: [], loadChildren: () => import('./pages/pages.module')
            .then(m => m.PagesModule),
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module')
    },
    {path: '', redirectTo: 'pages', pathMatch: 'full'},
    {path: '**', redirectTo: 'pages'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
