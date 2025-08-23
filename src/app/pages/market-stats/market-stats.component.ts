import { Component } from '@angular/core';

interface MarketStat {
  label: string;
  value: string;
  isPositive?: boolean;
}

@Component({
  selector: 'app-market-stats',
  templateUrl: './market-stats.component.html',
  styleUrls: ['./market-stats.component.scss']
})
export class MarketStatsComponent {
  marketStats: MarketStat[] = [
    {
      label: 'Average Property Price',
      value: '₼425,000',
      isPositive: true
    },
    {
      label: 'Monthly Market Growth',
      value: '+2.4%',
      isPositive: true
    },
    {
      label: 'Active Listings',
      value: '1,245'
    }
  ];
}
