import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Bike } from '../models/bike.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BikeService {

  constructor(private http: HttpClient) {
  }

  public find(): Observable<Bike[]> {
    const token = localStorage.getItem('access_token');
    return this.http.get<Bike[]>('/server/api/v1/bikes',
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) }
    );
  }

  public findById(id: number): Observable<Bike> {
    const token = localStorage.getItem('access_token');
    return this.http.get<Bike>('/server/api/v1/bikes/' + id,
      { headers: new HttpHeaders().set('Authorization', 'Bearer ' + token) }
    );
  }

  public create(bike: Bike): Observable<Bike> {
    return this.http.post<Bike>('/server/api/v1/bikes', bike, httpOptions);
  }

}
