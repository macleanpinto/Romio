import { Routes } from '@angular/router';
import { LayoutComponent } from './layout';
import { NoContentComponent } from './no-content';
import { RequestComponent } from './request';
import { CanActivateGuard } from './can.activate.guard';

export const ROUTES: Routes = [
    {
        path: 'app', component: LayoutComponent,
        children: [
            { path: 'nocontent', component: NoContentComponent },
            { path: 'request', component: RequestComponent },
            { path: '**', redirectTo: 'map', pathMatch: 'full' },
            { path: 'juliet', loadChildren: './juliet#JulietModule' },
            { path: '**', redirectTo: 'login', pathMatch: 'full' },
        ],
        canActivate: [CanActivateGuard]
    },
    { path: 'login', loadChildren: './login#LoginModule' },
    { path: '**', redirectTo: '/app', pathMatch: 'full' }
];
