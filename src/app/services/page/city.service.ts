import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/page/city';

const apiUrl = "http://localhost:19419/api/";
@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private http: HttpClient) { }
  getCity() : Observable<City[]>{
    return this.http.get<City[]>(apiUrl + "Cities");
  }
  saveCity(data: FormGroup) :
  Observable<City>{
    return this.http.post<City>(apiUrl + "Cities", data.value);
  }
}
