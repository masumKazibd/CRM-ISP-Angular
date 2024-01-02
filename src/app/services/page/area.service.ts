import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Area } from 'src/app/models/page/area';

const apiUrl = "http://localhost:19419/api/";

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient) { }
  getArea(): Observable<Area[]>{
    return this.http.get<Area[]>(apiUrl + "Areas");
  }
  saveArea(data: FormGroup): Observable<Area>{
    return this.http.post<Area>(apiUrl + "Areas", data.value)
  }
}
