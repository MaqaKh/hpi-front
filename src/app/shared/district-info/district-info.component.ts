import { Component, OnInit, Input } from '@angular/core';

interface DistrictInfo {
  name: string;
  description: string;
  priceRange: string;
  totalListings: number;
  newThisWeek: number;
  investmentScore: string;
}

@Component({
  selector: 'app-district-info',
  templateUrl: './district-info.component.html',
  styleUrls: ['./district-info.component.scss']
})
export class DistrictInfoComponent implements OnInit {

  @Input() selectedDistrict: string = 'Nasimi District';

  // District data - in a real app this would come from a service
  districtData: { [key: string]: DistrictInfo } = {
    'Nasimi District': {
      name: 'Nasimi District',
      description: 'Central location with excellent amenities and transportation connectivity.',
      priceRange: '$1,200 - $2,500',
      totalListings: 189,
      newThisWeek: 8,
      investmentScore: '7.8/10'
    },
    'Sabail District': {
      name: 'Sabail District',
      description: 'Historic waterfront district with premium properties and cultural attractions.',
      priceRange: '$1,500 - $3,200',
      totalListings: 156,
      newThisWeek: 12,
      investmentScore: '8.5/10'
    },
    'Yasamal District': {
      name: 'Yasamal District',
      description: 'Modern residential area with excellent schools and green spaces.',
      priceRange: '$900 - $2,100',
      totalListings: 234,
      newThisWeek: 15,
      investmentScore: '7.2/10'
    },
    'Narimanov District': {
      name: 'Narimanov District',
      description: 'Vibrant neighborhood with shopping centers and business districts.',
      priceRange: '$1,100 - $2,300',
      totalListings: 198,
      newThisWeek: 9,
      investmentScore: '7.6/10'
    }
  };

  currentDistrict: DistrictInfo = this.districtData['Nasimi District'];

  constructor() { }

  ngOnInit(): void {
    this.updateDistrictInfo();
  }

  ngOnChanges(): void {
    this.updateDistrictInfo();
  }

  private updateDistrictInfo(): void {
    this.currentDistrict = this.districtData[this.selectedDistrict] || this.districtData['Nasimi District'];
  }

  onViewAllProperties(): void {
    console.log('View all properties for:', this.currentDistrict.name);
    // Handle navigation to properties list
  }

  onContactAgent(): void {
    console.log('Contact agent for:', this.currentDistrict.name);
    // Handle contact agent functionality
  }

}
