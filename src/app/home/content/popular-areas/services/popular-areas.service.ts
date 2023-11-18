import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopularAreasService {

  constructor() { }

  getEnergySources() {
    return [
      { value: 'hydro', name: 'Hydro-electric' },
      { value: 'oil', name: 'Oil' },
      { value: 'gas', name: 'Natural gas' },
      { value: 'coal', name: 'Coal' },
      { value: 'nuclear', name: 'Nuclear' },
    ];
  }

  getCountriesInfo() {
    return [
      { country: 'USA', hydro: 71.2 },
      { country: 'China', hydro: 72.5 },
      { country: 'Russia', hydro: 47.7 },
      { country: 'Japan', hydro: 17.9 },
      { country: 'India', hydro: 14.4 },
      { country: 'Germany', hydro: 6.6 },
    ];
  }
}
