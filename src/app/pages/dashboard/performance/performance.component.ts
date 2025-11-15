import { Component } from '@angular/core';

interface DistrictPerformance {
  id: number;
  name: string;
  heatLevel: number; // 1-5 (number of active heat dots)
  stats: {
    views: {
      count: number;
      change: string;
      isPositive: boolean;
    };
    saves: {
      count: number;
      change: string;
      isPositive: boolean;
    };
    contacts: {
      count: number;
      change: string;
      isPositive: boolean;
    };
  };
}

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent {

  districts: DistrictPerformance[] = [
    {
      id: 1,
      name: 'Sabail District',
      heatLevel: 3,
      stats: {
        views: {
          count: 2340,
          change: '+40%',
          isPositive: true
        },
        saves: {
          count: 89,
          change: '+24%',
          isPositive: true
        },
        contacts: {
          count: 158,
          change: '+67%',
          isPositive: true
        }
      }
    },
    {
      id: 2,
      name: 'Nasimi District',
      heatLevel: 2,
      stats: {
        views: {
          count: 1240,
          change: '+17%',
          isPositive: true
        },
        saves: {
          count: 45,
          change: '+8%',
          isPositive: true
        },
        contacts: {
          count: 78,
          change: '+16%',
          isPositive: true
        }
      }
    },
    {
      id: 3,
      name: 'Yasamal District',
      heatLevel: 1,
      stats: {
        views: {
          count: 890,
          change: '-5%',
          isPositive: false
        },
        saves: {
          count: 23,
          change: '+2%',
          isPositive: true
        },
        contacts: {
          count: 34,
          change: '+8%',
          isPositive: true
        }
      }
    }
  ];

  constructor() { }

  getHeatDots(heatLevel: number): boolean[] {
    return Array(5).fill(false).map((_, index) => index < heatLevel);
  }

  formatNumber(num: number): string {
    return num.toLocaleString();
  }
}