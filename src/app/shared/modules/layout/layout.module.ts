import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent} from './components/index';

/**
 * components related to content layout
 */
const COMPONENTS = [PageLayoutComponent];

/**
 * Used by other modules. Containing main layout / search filter components
 */
@NgModule({
    imports: [RouterModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
})
export class LayoutTemplateModule {}
