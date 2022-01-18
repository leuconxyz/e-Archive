import { NgModule } from '@angular/core';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbMenuModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { UploaderModule } from './upload/uploader.module';
import { ShowcaseDialogComponent } from './dashboard/showcase-dialog/showcase-dialog.component';
import { FormInputsComponent } from './upload/form-inputs/form-inputs.component';
import { WindowFormComponent } from './upload/window/window-form/window-form.component';

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
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
  ],
  declarations: [
    PagesComponent,
    FormInputsComponent,
    ShowcaseDialogComponent,
    WindowFormComponent,
  ],
  entryComponents: [
    ShowcaseDialogComponent,
  ],
})
export class PagesModule {
}
