import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { PageLayoutComponent } from './shared/modules/layout';

// /**
//  * custom preloading strategy.
//  * Preload lazy load module that has data.preload = true.
//  * data.delay is optional. e.g. 1000 = 1000ms = 1s
//  */
// @Injectable({ providedIn: 'root' })
// export class CustomPreloadingStrategy implements PreloadingStrategy {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     preload(route: Route, fn: () => Observable<any>): Observable<any> {
//         const loadRoute = (delayInSec: number) => (delayInSec > 0 ? timer(delayInSec * 1000).pipe(map(() => fn())) : fn());
//         if (route.data && route.data.preload) {
//             const delayInSec = route.data.delayInSec ? route.data.delayInSec : 0;
//             return loadRoute(delayInSec);
//         }
//         return of(null);
//     }
// }

/**
 * contains main routing structure
 * if using a guard service make sure to NOT use routerID as the param otherwise
 * you will overwrite all the routing configuration that uses that param
 */
const ROUTES: Routes = [
    // {
    //     path: ROUTER_PATHS.messages.default,
    //     loadChildren: () => import('./modules/messages/messages.module').then((m) => m.MessagesModule),
    // },
    {
        path: '',
        component: PageLayoutComponent,
        canActivate: [],
        children: [
            // main routing paths
            ...[
                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full',
                },
                // {
                //     path: ROUTER_PATHS.errors.default,
                //     loadChildren: () => import('./modules/system-base/error.module').then((m) => m.ErrorPagesModule),
                // },
                {
                    path: 'home',
                    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
                    data: { preload: true, delayInSec: 1 },
                },
                // {
                //     path: ROUTER_PATHS.administration.default,
                //     loadChildren: () => import('./modules/administration/administration.module').then((m) => m.AdministrationModule),
                //     data: { preload: true, delayInSec: 4 },
                // },
              
            ],
            // // any other path goto 404 page
            // { path: '**', redirectTo: FEATURE_ROUTES.get(ROUTER_IDS.error.notFound)!.link },
        ],
    },
];

/**
 * Root application routing module
 */
@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
