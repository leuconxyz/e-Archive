import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbSearchService, NbThemeService, NbDialogService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { DataService } from '../../services/data.service';
import { ShowcaseDialogComponent } from './showcase-dialog/showcase-dialog.component';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy, OnInit {

  ngOnInit() {
    this.dataService.sendGetSearchLatest().subscribe((result: any) => {
      this.eList = result;
    });
  }

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

    this.searchService.onSearchSubmit()
    .subscribe((data: any) => {
      this.dataService.sendGetSearchRequest(data.term).subscribe((result: any) => {
        // this.eText = data.text;
        // this.eSha = data.sha;
        this.eList = result;
      });
    });
  }

  open(doc) {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'This is a title passed to the dialog component',
        doc: doc,
      },
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
