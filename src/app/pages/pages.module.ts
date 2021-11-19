import { NgModule } from '@angular/core';
import { NbCardModule, NbMenuModule, NbRadioModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { UploaderModule } from './upload/uploader.module';
import { ShowcaseDialogComponent } from './dashboard/showcase-dialog/showcase-dialog.component';
import { FormInputsComponent } from './upload/form-inputs/form-inputs.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    UploaderModule,
    MiscellaneousModule,
    NbCardModule,
    NbRadioModule,
  ],
  declarations: [
    PagesComponent,
    ShowcaseDialogComponent,
  ],
  entryComponents: [
    ShowcaseDialogComponent,
  ],
})
export class PagesModule {
}
