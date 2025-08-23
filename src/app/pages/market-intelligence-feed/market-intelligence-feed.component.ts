import { Component, OnInit } from '@angular/core';

export interface MarketFeedItem {
  id: string;
  type: 'news' | 'analysis' | 'insight' | 'report';
  category: string;
  title: string;
  description: string;
  image: string;
  publishedAt: Date;
  readTime?: number;
  author?: string;
  tags?: string[];
  priority?: 'high' | 'medium' | 'low';
  route?: string;
}

@Component({
  selector: 'app-market-intelligence-feed',
  templateUrl: './market-intelligence-feed.component.html',
  styleUrls: ['./market-intelligence-feed.component.scss']
})
export class MarketIntelligenceFeedComponent implements OnInit {

  feedItems: MarketFeedItem[] = [
    {
      id: 'city-center-developments',
      type: 'news',
      category: 'Latest News',
      title: 'Market Update: New Developments in City Center',
      description: 'Explore the latest trends and insights in the Baku real estate market.',
      image: 'assets/market-inteligence1.png',
      publishedAt: new Date('2024-08-20'),
      readTime: 3,
      author: 'Market Research Team',
      tags: ['development', 'city-center', 'market-update'],
      priority: 'high',
      route: '/insights/city-center-developments'
    },
    {
      id: 'emerging-districts-analysis',
      type: 'analysis',
      category: 'Market Analysis',
      title: 'Expert Analysis: Investment Opportunities in Emerging Districts',
      description: 'Discover the potential of up-and-coming areas with high growth potential.',
      image: 'assets/market-inteligence2.png',
      publishedAt: new Date('2024-08-18'),
      readTime: 5,
      author: 'Investment Advisory Team',
      tags: ['investment', 'emerging-districts', 'growth-potential'],
      priority: 'high',
      route: '/insights/emerging-districts-analysis'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onFeedItemClick(item: MarketFeedItem): void {
    console.log('Feed item clicked:', item);
    
    if (item.route) {
      // Handle navigation
      // this.router.navigate([item.route]);
    }
    
    // Track interaction
    this.trackFeedItemClick(item);
  }

  private trackFeedItemClick(item: MarketFeedItem): void {
    console.log(`Feed item clicked: ${item.title} (${item.type})`);
  }

  getRelativeTime(date: Date): string {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
  }

  getCategoryColor(category: string): string {
    const colors = {
      'Latest News': '#3b82f6',
      'Market Analysis': '#059669',
      'Investment Insight': '#dc2626',
      'Research Report': '#7c3aed'
    };
    return colors[category as keyof typeof colors] || '#64748b';
  }

  trackByFeedItemId(index: number, item: MarketFeedItem): string {
    return item.id;
  }
}
