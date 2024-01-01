import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IspPackage } from 'src/app/models/page/ispPackage';
import { FormGroup } from '@angular/forms';


const apiUrl = "http://localhost:19419/api/";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getIspPackages() : Observable<IspPackage[]>{
    return this.http.get<IspPackage[]>(apiUrl + "Packages");
  }


  saveIspPackages(data: FormGroup) : Observable<IspPackage>{
    return this.http.post<IspPackage>(apiUrl + "Packages", data.value);
  }

}
