import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-showcase-dialog',
  templateUrl: 'showcase-dialog.component.html',
  styleUrls: ['showcase-dialog.component.scss'],
})
export class ShowcaseDialogComponent {

  @Input() title: string;
  @Input() doc;

  constructor(protected ref: NbDialogRef<ShowcaseDialogComponent>) {
    console.log(this.doc);
  }

  dismiss() {
    this.ref.close();
  }
}