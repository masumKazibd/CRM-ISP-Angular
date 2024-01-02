import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/page/city';
import { EndPoints } from 'src/app/shared/end-ponts';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private endPoints: EndPoints = new EndPoints();
  constructor(private http: HttpClient) { }
  getCity() : Observable<City[]>{
    return this.http.get<City[]>(this.endPoints.getCities);
  }
  saveCity(data: FormGroup) :
  Observable<City>{
    return this.http.post<City>(this.endPoints.saveCity, data.value);
  }
}
