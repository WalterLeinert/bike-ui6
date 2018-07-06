import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bike } from '../models/bike.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BikeService {

  constructor(private http: HttpClient) {
  }

  public getBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>('/server/api/v1/bikes');
  }

  public getBike(id: number): Observable<Bike> {
    return this.http.get<Bike>('/server/api/v1/bikes' + id);
  }

  public create(bike: Bike): Observable<Bike> {
    return this.http.post<Bike>('/server/api/v1/bikes', bike, httpOptions);
  }

}
