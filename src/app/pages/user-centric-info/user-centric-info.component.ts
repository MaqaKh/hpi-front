import { Component, OnInit } from '@angular/core';

export interface UserCentricFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  route?: string;
  isActive?: boolean;
  metadata?: {
    count?: number;
    status?: string;
    lastUpdated?: Date;
  };
}

@Component({
  selector: 'app-user-centric-info',
  templateUrl: './user-centric-info.component.html',
  styleUrls: ['./user-centric-info.component.scss']
})
export class UserCentricInfoComponent implements OnInit {

  features: UserCentricFeature[] = [
    {
      id: 'best-value-areas',
      title: 'Best Value Areas',
      description: 'Discover neighborhoods offering the best price-to-value ratio for your investment',
      icon: 'home',
      route: '/analysis/value-areas',
      isActive: true,
      metadata: {
        count: 12,
        status: 'updated'
      }
    },
    {
      id: 'metro-accessibility',
      title: 'Metro Accessibility Impact',
      description: 'Analyze how metro station proximity affects property values and convenience',
      icon: 'train',
      route: '/analysis/metro-impact',
      isActive: true,
      metadata: {
        count: 8,
        status: 'active'
      }
    },
    {
      id: 'market-timing',
      title: 'Market Timing Insights',
      description: 'Get data-driven recommendations on optimal buying and selling periods',
      icon: 'clock',
      route: '/analysis/timing',
      isActive: true,
      metadata: {
        status: 'live'
      }
    },
    {
      id: 'financing-landscape',
      title: 'Financing Landscape',
      description: 'Explore current mortgage rates, loan options, and financing opportunities',
      icon: 'dollar',
      route: '/analysis/financing',
      isActive: true,
      metadata: {
        count: 15,
        status: 'updated'
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onFeatureClick(feature: UserCentricFeature): void {
    console.log('Feature clicked:', feature);
    if (feature.route) {
      // Handle navigation
      // this.router.navigate([feature.route]);
    }
  }

  getIconSvg(iconName: string): string {
    return `assets/icons/${iconName}.svg`;
  }

  trackByFeatureId(index: number, feature: UserCentricFeature): string {
    return feature.id;
  }
}
