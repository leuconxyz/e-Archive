import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { WindowFormComponent } from '../window/window-form/window-form.component';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  fileName = '';

  constructor(private http: HttpClient, private windowService: NbWindowService) { }

  onFileSelected(event) {

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("thumbnail", file);

      const upload$ = this.http.post("/api/thumbnail-upload", formData);

      upload$.subscribe();
    }
  }

  openWindowForm() {
    this.windowService.open(WindowFormComponent, { title: `Window` });
  }
}

