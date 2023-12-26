import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Packagelist } from 'src/app/models/page/packagelist';


const apiUrl = "http://localhost:19419/api/";
@Injectable({
  providedIn: 'root'
})
export class PackagelistService {

  constructor(private http: HttpClient) { }
  getCandidates() : Observable<Packagelist[]>{
    return this.http.get<Packagelist[]>(apiUrl + "Packages");
  }

  
}
