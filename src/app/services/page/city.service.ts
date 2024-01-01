import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CityModel } from 'src/app/models/page/city-model';

const apiUrl = "http://localhost:19419/api/";
@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private http: HttpClient) { }
  getCity() : Observable<CityModel[]>{
    return this.http.get<CityModel[]>(apiUrl + "Cities");
  }
  saveCity(data: FormGroup) :
  Observable<CityModel>{
    return this.http.post<CityModel>(apiUrl + "Cities", data.value);
  }
}
