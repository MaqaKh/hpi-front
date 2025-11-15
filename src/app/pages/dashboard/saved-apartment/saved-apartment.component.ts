import { Component } from '@angular/core';

interface SavedApartment {
  id: number;
  title: string;
  bedrooms: number;
  bathrooms: number;
  squareMeters: number;
  district: string;
  price: string;
  priceChange: {
    text: string;
    type: 'decrease' | 'new' | 'budget';
  };
  isHighlighted: boolean;
}

@Component({
  selector: 'app-saved-apartment',
  templateUrl: './saved-apartment.component.html',
  styleUrls: ['./saved-apartment.component.scss']
})
export class SavedApartmentComponent {

  savedApartments: SavedApartment[] = [
    {
      id: 1,
      title: 'Modern 2-Room Apartment in Sabail',
      bedrooms: 2,
      bathrooms: 2,
      squareMeters: 95,
      district: 'Sabail District',
      price: '$198k',
      priceChange: {
        text: '-$12k (5.7%)',
        type: 'decrease'
      },
      isHighlighted: true
    },
    {
      id: 2,
      title: 'Luxury Apartment near Metro Nizami',
      bedrooms: 3,
      bathrooms: 2,
      squareMeters: 120,
      district: 'Nasimi District',
      price: '$195k',
      priceChange: {
        text: 'New listing',
        type: 'new'
      },
      isHighlighted: false
    },
    {
      id: 3,
      title: 'Renovated Soviet-Era Apartment',
      bedrooms: 2,
      bathrooms: 1,
      squareMeters: 75,
      district: 'Yasamal District',
      price: '$165k',
      priceChange: {
        text: 'In budget',
        type: 'budget'
      },
      isHighlighted: false
    }
  ];

  constructor() { }

  onApartmentClick(apartment: SavedApartment) {
    console.log('Apartment clicked:', apartment);
    // Handle apartment click logic here
  }
}