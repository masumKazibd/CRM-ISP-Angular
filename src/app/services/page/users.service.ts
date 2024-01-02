import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IspPackage } from 'src/app/models/page/ispPackage';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/models/page/user';


const apiUrl = "http://localhost:19419/api/";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(apiUrl + "Auth/getUsers");
  }


  saveUser(data: User) : Observable<User>{
    return this.http.post<User>(apiUrl + "Auth/addUser", data);
  }

}
