import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoints } from '../shared/end-ponts';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private endPoints: EndPoints = new EndPoints();
  constructor(private http: HttpClient) { }
  login(data: any):Observable<any> {
    return this.http.post('http://localhost:19419/api/Auth/login', data);
  }
}
