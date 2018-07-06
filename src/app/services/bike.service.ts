import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BikeService {

  constructor(private http: HttpClient) {
  }

  public getBikes() {
    return this.http.get('/server/api/v1/bikes');
  }

}
