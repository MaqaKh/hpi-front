import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from '../models/region.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceChangeServiceService {

  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getStatistics(region:any): Observable<Region[]> {
    return this.http.get<Region[]>(this.apiUrl +"statistics/region/"+region);
  }
}
