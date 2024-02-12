import { Component } from '@angular/core';
import { Region } from '../price-change/models/region.model';
import { PriceChangeServiceService } from '../price-change/service/price-change-service.service';
import { EconomicDataServiceService } from '../services/economic-data-service.service';
import { EconomicData } from '../models/economic-data.model';
import { Statistics } from '../models/statistics.model';

@Component({
  selector: 'app-popular-economic-data',
  templateUrl: './popular-economic-data.component.html',
  styleUrls: ['./popular-economic-data.component.css']
})
export class PopularEconomicDataComponent {
  inflation: Statistics[]=[]
  mortgageRate:Statistics[] = [];
  

  constructor(private economicData: EconomicDataServiceService) {
    economicData.getStatistics("Inflation").subscribe({
      next: (x)=>{
        this.inflation = x.statistics;
      },
      error: (err) =>{
        console.log(err);
      }
    });

    economicData.getStatistics("Mortgage").subscribe((x)=>{
      this.mortgageRate = x.statistics;
       console.log(this.mortgageRate)},
    (err)=>{console.log(err)})


  
  } 

  ngOnInit(): void {
   
  }
}
