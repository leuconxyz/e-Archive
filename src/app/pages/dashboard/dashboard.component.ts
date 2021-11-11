import {Component, OnDestroy} from '@angular/core';
import { NbSearchService, NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import { DataService } from '../../services/data.service';

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
export class DashboardComponent implements OnDestroy {

  private alive = true;
  readMore = false;

  public eText = '';
  public eSha = '';
  public eList = [];
  public eTitle = '';

  constructor(private themeService: NbThemeService,
              private searchService: NbSearchService,
              private dataService: DataService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
    });

    this.searchService.onSearchSubmit()
    .subscribe((data: any) => {
      this.dataService.sendGetSearchRequest(data.term).subscribe((data: any)=>{
        console.log(data);
        //this.eText = data.text;
        //this.eSha = data.sha;
        this.eList = data;
      });
    });
    
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
