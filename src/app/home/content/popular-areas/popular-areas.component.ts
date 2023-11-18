import { Component } from '@angular/core';
import { PopularAreasService } from './services/popular-areas.service';
import { CountryInfo } from './models/country-info.model';
import { EnergyDescription } from './models/energy-description.model';

@Component({
  selector: 'app-popular-areas',
  templateUrl: './popular-areas.component.html',
  styleUrls: ['./popular-areas.component.css']
})
export class PopularAreasComponent {

  types: string[] = ['line', 'stackedline', 'fullstackedline'];

  countriesInfo: CountryInfo[] = [];
  energySources: EnergyDescription[] = [];

  constructor(private dataService: PopularAreasService) {

  } 

  ngOnInit(): void {
    this.countriesInfo = this.dataService.getCountriesInfo();
    this.energySources = this.dataService.getEnergySources();
  }

}