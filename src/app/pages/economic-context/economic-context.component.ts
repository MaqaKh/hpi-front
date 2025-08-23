import { Component, OnInit } from '@angular/core';

export interface EconomicIndicator {
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
  selector: 'app-economic-context',
  templateUrl: './economic-context.component.html',
  styleUrls: ['./economic-context.component.scss']
})
export class EconomicContextComponent implements OnInit {

  economicIndicators: EconomicIndicator[] = [
    {
      id: 'mortgage-rates',
      label: 'Mortgage Rates',
      value: '4.5%',
      numericValue: 4.5,
      unit: '%',
      status: 'neutral',
      description: 'Current average mortgage interest rate',
      lastUpdated: new Date()
    },
    {
      id: 'inflation',
      label: 'Inflation',
      value: '2.1%',
      numericValue: 2.1,
      unit: '%',
      status: 'positive',
      description: 'Annual inflation rate',
      lastUpdated: new Date()
    },
    {
      id: 'currency-stability',
      label: 'Currency Stability',
      value: 'Stable',
      status: 'stable',
      description: 'Current currency market condition',
      lastUpdated: new Date()
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getStatusColor(status?: string): string {
    switch (status) {
      case 'positive':
        return '#059669';
      case 'negative':
        return '#dc2626';
      case 'stable':
        return '#0d9488';
      case 'neutral':
      default:
        return '#64748b';
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
        return '•';
    }
  }

  onIndicatorClick(indicator: EconomicIndicator): void {
    console.log('Economic indicator clicked:', indicator);
    // Handle indicator click for detailed view
  }

  trackByIndicatorId(index: number, indicator: EconomicIndicator): string {
    return indicator.id;
  }
}
