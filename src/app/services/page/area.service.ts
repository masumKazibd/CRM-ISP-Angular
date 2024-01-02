import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Area } from 'src/app/models/page/area';
import { EndPoints } from 'src/app/shared/end-ponts';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private endPoints: EndPoints = new EndPoints();

  constructor(private http: HttpClient) { }
  getArea(): Observable<Area[]>{
    return this.http.get<Area[]>(this.endPoints.fetchAreaEndPoint);
  }
  saveArea(data: FormGroup): Observable<Area>{
    return this.http.post<Area>(this.endPoints.postAreaEndPoint, data.value)
  }
}
