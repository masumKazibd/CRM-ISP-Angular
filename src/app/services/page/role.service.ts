import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Roles } from 'src/app/models/page/roles';
import { EndPoints } from 'src/app/shared/end-ponts';


@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private endPoints: EndPoints = new EndPoints();
  constructor(private http: HttpClient) { }
  getRole(): Observable<Roles[]>{
    return this.http.get<Roles[]>(this.endPoints.getRoles);
  }
  saveRole(data: FormGroup): Observable<Roles>{
    return this.http.post<Roles>(this.endPoints.saveRole, data.value );
  }
}