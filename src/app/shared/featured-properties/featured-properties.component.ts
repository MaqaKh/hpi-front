import { Component, OnInit } from '@angular/core';

interface Property {
  id: number;
  image: string;
  price: string;
  rooms: string;
  metroStation: string;
  district: string;
  type: string;
}

@Component({
  selector: 'app-featured-properties',
  templateUrl: './featured-properties.component.html',
  styleUrls: ['./featured-properties.component.scss']
})
export class FeaturedPropertiesComponent implements OnInit {

  properties: Property[] = [
    {
      id: 1,
      image: 'assets/baku/city-1.png',
      price: '$325,000',
      rooms: '3 Bedrooms',
      metroStation: 'Sahil Metro',
      district: 'Sabail',
      type: 'Apartment'
    },
    {
      id: 2,
      image: 'assets/baku/city-2.png',
      price: '$285,000',
      rooms: '2 Bedrooms',
      metroStation: 'Icherisheher Metro',
      district: 'Old City',
      type: 'Apartment'
    },
    {
      id: 3,
      image: 'assets/baku/city-3.png',
      price: '$450,000',
      rooms: '4 Bedrooms',
      metroStation: 'Nizami Metro',
      district: 'Nasimi',
      type: 'Penthouse'
    },
    {
      id: 4,
      image: 'assets/baku/city-4.png',
      price: '$198,000',
      rooms: '1 Bedroom',
      metroStation: 'Elmlar Akademiyasi Metro',
      district: 'Yasamal',
      type: 'Studio'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onPropertyClick(property: Property): void {
    console.log('Property clicked:', property);
    // Handle property click - navigate to property details
  }

  trackByPropertyId(index: number, property: Property): number {
    return property.id;
  }

}
