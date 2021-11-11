import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(eId) {
    return this.httpClient.get(this.REST_API_SERVER + '/parse/' + eId);
  }

  public sendGetSearchRequest(eId) {
    return this.httpClient.get(this.REST_API_SERVER + '/files/search/?text=' + eId);
  }
}
