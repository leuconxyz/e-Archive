import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { take } from 'rxjs/operators';
import { WindowFormComponent } from '../window/window-form/window-form.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  nameForm = new FormControl('');
  fileUp = new FormControl('');

  public fileSplit(fileUp) {
    return fileUp.split(/(\\|\/)/g).pop();
  }

  fileUploadForm = new FormGroup({
    fupName: new FormControl(''),
  });

  fileName = '';

  public eSha = '';
  public eTitle = '';
  public eText = '';
  public eAuthor ='';

  constructor(private http: HttpClient, private windowService: NbWindowService) { }

  onUpload(event) {

    const file: File = event.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("file", file);

      const upload$ = this.http.post("http://localhost:8080/parse/text", formData);

      upload$.pipe(take(1)).subscribe();
    }
  }

  openWindowForm() {
    this.windowService.open(WindowFormComponent, { title: `Window` });
  }
}

