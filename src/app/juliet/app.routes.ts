import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { Routes } from '@angular/router';
import { TableComponent } from './demo';
import { BlockComponent } from './block';
export const ROUTES: Routes = [
    { path: '', component: TableComponent },
    { path: 'block', component: BlockComponent },
    { path: 'example/table', component: TableComponent }
];
