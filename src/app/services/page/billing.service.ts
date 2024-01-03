import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndPoints } from 'src/app/shared/end-ponts';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private endpoints: EndPoints = new EndPoints();
  
  constructor(private http:HttpClient) { }
  getMaxBillingId(){
    return this.http.get(this.endpoints.getMaxBillingId);
  }
}
