import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IspPackage } from 'src/app/models/page/ispPackage';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/models/page/user';
import { EndPoints } from 'src/app/shared/end-ponts';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endPoints: EndPoints = new EndPoints();
  constructor(private http: HttpClient) { }
  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.endPoints.getUsers);
  }


  saveUser(data: User) : Observable<User>{
    return this.http.post<User>(this.endPoints.addUser, data);
  }

}
