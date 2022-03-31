import { NgModule } from '@angular/core';
import { routes } from './home.routing';
import { RouterModule } from '@angular/router';
import { AppPageTemplateComponent } from './pages/page-template.component';
import { AppHomeIntroduction } from './pages';


/**
 * Common modules
 */
// @ts-ignore
const COMMON_MODULES = [];

/**
 * Home Components
 */
// @ts-ignore
const COMPONENTS = [

];

/**
 * page components
 */
const PAGE_COMPONENTS = [
    AppPageTemplateComponent,
    AppHomeIntroduction,
];
/**
 * Home services
 */
// @ts-ignore
const SERVICES = [
];

/**
 * feature module
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    // @ts-ignore
    declarations: [...PAGE_COMPONENTS, ...COMPONENTS],
    // @ts-ignore
    providers: [SERVICES],
})
export class HomeModule {}
