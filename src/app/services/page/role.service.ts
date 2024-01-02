import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Roles } from 'src/app/models/page/roles';

const apiUrl = "http://localhost:19419/api/"

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private http: HttpClient) { }
  getRole(): Observable<Roles[]>{
    return this.http.get<Roles[]>(apiUrl + "Roles");
  }
  saveRole(data: FormGroup): Observable<Roles>{
    return this.http.post<Roles>(apiUrl + "roles", data.value );
  }
}