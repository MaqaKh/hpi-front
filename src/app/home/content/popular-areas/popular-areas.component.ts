import { Component } from '@angular/core';
import { CountryInfo } from './models/country-info.model';
import { EnergyDescription } from './models/energy-description.model';
import { Region } from '../price-change/models/region.model';
import { PriceChangeServiceService } from '../price-change/service/price-change-service.service';

@Component({
  selector: 'app-popular-areas',
  templateUrl: './popular-areas.component.html',
  styleUrls: ['./popular-areas.component.css']
})
export class PopularAreasComponent {

  yasamalQesebesi:Region[] =[];
  ehmedliQesebesi:Region[] =[];
  sekkizinciKilometr:Region[] =[];
  doqquzuncuMikrorayon: Region[] = [];
  yeniYasamal: Region[] = [];
  heziAslanovQesebesi: Region[] = [];
  

  constructor(
    private priceChangeService: PriceChangeServiceService) {

      priceChangeService.getStatistics(3).subscribe({
        next: (x) => {
          this.yasamalQesebesi = x;
        },
        error: (err) => {
          console.error(`Error occurred: ${err}`);
        },
        complete: () => {
          console.log('Data loading complete.');
        },
      });

      priceChangeService.getStatistics(2).subscribe({
        next: (x) => {
          this.ehmedliQesebesi = x;
        },
        error: (err) => {
          console.error(`Error occurred: ${err}`);
        },
        complete: () => {
          console.log('Data loading complete.');
        },
      });

          // Sekkizinci Kilometr
      priceChangeService.getStatistics(null).subscribe({
        next: (x) => {
          this.sekkizinciKilometr = x;
        },
        error: (err) => {
          console.error(`Error occurred for Sekkizinci Kilometr: ${err}`);
        },
        complete: () => {
          console.log('Data loading for Sekkizinci Kilometr complete.');
        },
      });

      // Doqquzuncu Mikrorayon
      priceChangeService.getStatistics(3).subscribe({
        next: (x) => {
          this.doqquzuncuMikrorayon = x;
        },
        error: (err) => {
          console.error(`Error occurred for Doqquzuncu Mikrorayon: ${err}`);
        },
        complete: () => {
          console.log('Data loading for Doqquzuncu Mikrorayon complete.');
        },
      });

      // Yeni Yasamal
      priceChangeService.getStatistics(2).subscribe({
        next: (x) => {
          this.yeniYasamal = x;
        },
        error: (err) => {
          console.error(`Error occurred for Yeni Yasamal: ${err}`);
        },
        complete: () => {
          console.log('Data loading for Yeni Yasamal complete.');
        },
      });

      // Hezi Aslanov Qesebesi
      priceChangeService.getStatistics(2).subscribe({
        next: (x) => {
          this.heziAslanovQesebesi = x;
        },
        error: (err) => {
          console.error(`Error occurred for Hezi Aslanov Qesebesi: ${err}`);
        },
        complete: () => {
          console.log('Data loading for Hezi Aslanov Qesebesi complete.');
        },
      });
  } 

  ngOnInit(): void {
   
  }

}