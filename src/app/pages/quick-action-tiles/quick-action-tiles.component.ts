import { Component, OnInit } from '@angular/core';

export interface QuickActionTile {
  id: string;
  title: string;
  description?: string;
  image: string;
  route?: string;
  action?: string;
  category?: string;
  isActive?: boolean;
  metadata?: {
    count?: number;
    popular?: boolean;
    trending?: boolean;
  };
}

@Component({
  selector: 'app-quick-action-tiles',
  templateUrl: './quick-action-tiles.component.html',
  styleUrls: ['./quick-action-tiles.component.scss']
})
export class QuickActionTilesComponent implements OnInit {

  actionTiles: QuickActionTile[] = [
    {
      id: 'popular-searches',
      title: 'Popular Searches',
      description: 'Explore the most searched properties and neighborhoods in Baku',
      image: 'assets/market-hotspot1.svg',
      route: '/search/popular',
      action: 'search',
      category: 'search',
      isActive: true,
      metadata: {
        popular: true,
        count: 1250
      }
    },
    {
      id: 'price-shortcuts',
      title: 'Price Shortcuts',
      description: 'Quick access to properties by price range and budget filters',
      image: 'assets/market-hotspot2.svg',
      route: '/search/price-ranges',
      action: 'filter',
      category: 'price',
      isActive: true,
      metadata: {
        count: 8
      }
    },
    {
      id: 'property-type-shortcuts',
      title: 'Property Type Shortcuts',
      description: 'Browse by property type: apartments, houses, commercial, and more',
      image: 'assets/market-hotspot3.svg',
      route: '/search/property-types',
      action: 'browse',
      category: 'type',
      isActive: true,
      metadata: {
        count: 12
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onTileClick(tile: QuickActionTile): void {
    console.log('Quick action tile clicked:', tile);
    
    if (tile.route) {
      // Handle navigation
      // this.router.navigate([tile.route]);
    }
    
    // Emit event for analytics
    this.trackTileClick(tile);
  }

  private trackTileClick(tile: QuickActionTile): void {
    // Analytics tracking
    console.log(`Tile clicked: ${tile.title} (${tile.id})`);
  }

  getTileBackgroundStyle(tile: QuickActionTile): { [key: string]: string } {
    return {
      'background-image': `url(${tile.image})`,
      'background-size': 'cover',
      'background-position': 'center',
      'background-repeat': 'no-repeat'
    };
  }

  trackByTileId(index: number, tile: QuickActionTile): string {
    return tile.id;
  }
}
