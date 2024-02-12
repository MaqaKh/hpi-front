import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EconomicData } from '../models/economic-data.model';

@Injectable({
  providedIn: 'root'
})
export class EconomicDataServiceService {

  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getStatistics(type:any): Observable<EconomicData> {
    return this.http.get<EconomicData>(this.apiUrl +"economic-data?name="+type);
  }
}
