import {Component, OnDestroy} from '@angular/core';
import { NbSearchService, NbThemeService, NbDialogService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { DataService } from '../../services/data.service';
import { ShowcaseDialogComponent } from '../dashboard/showcase-dialog/showcase-dialog.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component'

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-uploader',
  styleUrls: ['./uploader.component.scss'],
  templateUrl: './uploader.component.html',
})
export class UploaderComponent implements OnDestroy {

  private alive = true;
  readMore = false;

  public eText = '';
  public eSha = '';
  public eList = [];
  public eTitle = '';

  constructor(private themeService: NbThemeService,
              private searchService: NbSearchService,
              private dataService: DataService,
              private dialogService: NbDialogService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
