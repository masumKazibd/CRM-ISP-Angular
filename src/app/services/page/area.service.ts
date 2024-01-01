import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AreaModel } from 'src/app/models/page/area-model';

const apiUrl = "http://localhost:19419/api/";

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient) { }
  getArea(): Observable<AreaModel[]>{
    return this.http.get<AreaModel[]>(apiUrl + "Areas");
  }
}
