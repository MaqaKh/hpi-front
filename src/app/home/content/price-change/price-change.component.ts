import { Component } from '@angular/core';
import { Region } from './models/region.model';
import { PriceChangeServiceService } from './service/price-change-service.service';

@Component({
  selector: 'app-price-change',
  templateUrl: './price-change.component.html',
  styleUrls: ['./price-change.component.css']
})
export class PriceChangeComponent {

  sumqayit:Region[] =[];
  baku:Region[] =[];
  xirdalan:Region[] =[];
  

  constructor( private priceChangeService: PriceChangeServiceService) {
    priceChangeService.getStatistics(3).subscribe((x)=>{
      this.sumqayit = x;
       console.log(this.sumqayit)},
    (err)=>{console.log(err)})

    priceChangeService.getStatistics(2).subscribe((x)=>{
      this.xirdalan = x;
       console.log(this.xirdalan)},
    (err)=>{console.log(err)})

    priceChangeService.getStatistics(null).subscribe((x)=>{
      this.baku = x;
       console.log(this.baku)},
    (err)=>{console.log(err)})
  } 

  ngOnInit(): void {
   
  }

}
