import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IspPackage } from 'src/app/models/page/ispPackage';
import { FormGroup } from '@angular/forms';
import { EndPoints } from 'src/app/shared/end-ponts';


@Injectable({
  providedIn: 'root'
})
export class IspPackageService {
  private endPoints: EndPoints = new EndPoints();

  constructor(private http: HttpClient) { }
  getIspPackages() : Observable<IspPackage[]>{
    return this.http.get<IspPackage[]>(this.endPoints.getIspPackages);
  }

  getIspPackageById(id: string) : Observable<IspPackage>{
    return this.http.get<IspPackage>(this.endPoints.getIspPackageById + id);
  }
  

  saveIspPackages(data: FormGroup) : Observable<IspPackage>{
    return this.http.post<IspPackage>(this.endPoints.saveIspPackage, data.value);
  }

}
