import { Component, OnInit } from '@angular/core';

export interface MarketStatistic {
  id: string;
  label: string;
  value: string;
  numericValue?: number;
  unit?: string;
  status?: 'positive' | 'negative' | 'neutral' | 'stable';
  description?: string;
  lastUpdated?: Date;
}

@Component({
  selector: 'app-market-statistics',
  templateUrl: './market-statistics.component.html',
  styleUrls: ['./market-statistics.component.scss']
})
export class MarketStatisticsComponent implements OnInit {

  marketStatistics: MarketStatistic[] = [
    {
      id: 'average-price',
      label: 'Average Price',
      value: '$1,850',
      numericValue: 1850,
      unit: '$',
      status: 'neutral',
      description: 'Current average property price',
      lastUpdated: new Date()
    },
    {
      id: 'growth-rate',
      label: 'Growth Rate',
      value: '+3%',
      numericValue: 3,
      unit: '%',
      status: 'positive',
      description: 'Year-over-year price growth',
      lastUpdated: new Date()
    },
    {
      id: 'availability',
      label: 'Availability',
      value: 'Medium',
      status: 'stable',
      description: 'Current market inventory level',
      lastUpdated: new Date()
    },
    {
      id: 'days-market',
      label: 'Days on Market',
      value: '35',
      numericValue: 35,
      unit: 'days',
      status: 'neutral',
      description: 'Average time properties stay listed',
      lastUpdated: new Date()
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getStatusColor(status?: string): string {
    switch (status) {
      case 'positive':
        return '#3b82f6'; // Blue for positive (matches the image)
      case 'negative':
        return '#dc2626';
      case 'stable':
        return '#0d9488';
      case 'neutral':
      default:
        return '#3b82f6'; // Default blue color from image
    }
  }

  getStatusIcon(status?: string): string {
    switch (status) {
      case 'positive':
        return '↗';
      case 'negative':
        return '↘';
      case 'stable':
        return '→';
      case 'neutral':
      default:
        return '';
    }
  }

  onStatisticClick(statistic: MarketStatistic): void {
    console.log('Market statistic clicked:', statistic);
    // Handle statistic click for detailed view
  }

  trackByStatisticId(index: number, statistic: MarketStatistic): string {
    return statistic.id;
  }
}
