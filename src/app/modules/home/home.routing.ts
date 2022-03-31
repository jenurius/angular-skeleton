import { Routes } from '@angular/router';
import {
    AppHomeIntroduction,
} from './pages';
import {  AppPageTemplateComponent } from './pages/page-template.component';

/**
 * page routing
 */
export const routes: Routes = [
    {
        path: '',
        pathMatch: 'prefix',
        component: AppPageTemplateComponent,
        data: {
            routerID: { ID: 'home-default' },
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'get-started',
            },
            {
                path: `get-started`,
                pathMatch: 'full',
                component: AppHomeIntroduction,
                data: {
                    routerID: { ID: 'get-started' },
                },
            },
        ],
    },
];
