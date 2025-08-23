import { Component, OnInit } from '@angular/core';

export interface DistrictHotspot {
  id: string;
  name: string;
  priceChange: string;
  priceChangeValue: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-market-hotspots',
  templateUrl: './market-hotspots.component.html',
  styleUrls: ['./market-hotspots.component.scss']
})
export class MarketHotspotsComponent implements OnInit {

  hotspots: DistrictHotspot[] = [
    {
      id: 'district-a',
      name: 'Yasamal',
      priceChange: '+5%',
      priceChangeValue: 5,
      image: 'assets/market-hotspot1.svg',
      description: 'Highest Price Change: +5%'
    },
    {
      id: 'district-b',
      name: 'Sabail',
      priceChange: '+4.2%',
      priceChangeValue: 4.2,
      image: 'assets/market-hotspot2.svg',
      description: 'Highest Price Change: +4.2%'
    },
    {
      id: 'district-c',
      name: 'Nasimi',
      priceChange: '+3.8%',
      priceChangeValue: 3.8,
      image: 'assets/market-hotspot3.svg',
      description: 'Highest Price Change: +3.8%'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onDistrictClick(district: DistrictHotspot): void {
    console.log('District clicked:', district);
    // Handle district selection/navigation
  }

  getPriceChangeColor(value: number): string {
    if (value > 4) return '#059669'; // Green for high growth
    if (value > 3) return '#0d9488'; // Teal for medium growth
    return '#64748b'; // Gray for lower growth
  }

  trackByHotspotId(index: number, hotspot: DistrictHotspot): string {
    return hotspot.id;
  }
}
