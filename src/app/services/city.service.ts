import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city'

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private http: HttpClient) { }
  get(): Observable<City[]> {
    return this.http.get<City[]>("http://localhost:5203/api/Cities");
  }
  projectPost(data: City): Observable<City> {
    return this.http.post<City>("http://localhost:5120/api/Projects", data);
  }
}
