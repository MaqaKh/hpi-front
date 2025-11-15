import { Component } from '@angular/core';

interface Recommendation {
  id: number;
  icon: string;
  title: string;
  description: string;
  actionText: string;
  actionType: 'primary' | 'secondary';
  actionHandler: string;
}

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent {

  recommendations: Recommendation[] = [
    {
      id: 1,
      icon: '🎯',
      title: 'Best Opportunity',
      description: 'Sabail apartment reduced by $12k - now in your budget. High investment potential.',
      actionText: 'View Property',
      actionType: 'primary',
      actionHandler: 'viewProperty'
    },
    {
      id: 2,
      icon: '⏰',
      title: 'Market Timing',
      description: 'High buyer interest in Sabail (+45% views) - expect competitive offers. Contact agents quickly on favorites.',
      actionText: 'Learn More',
      actionType: 'secondary',
      actionHandler: 'learnMore'
    },
    {
      id: 3,
      icon: '💰',
      title: 'Budget Expansion',
      description: 'Increase budget by 5% to access 40+ more options in Sabail.',
      actionText: 'Calculate',
      actionType: 'secondary',
      actionHandler: 'calculate'
    }
  ];

  constructor() { }

  onActionClick(actionHandler: string, recommendation: Recommendation) {
    switch (actionHandler) {
      case 'viewProperty':
        this.viewProperty(recommendation);
        break;
      case 'learnMore':
        this.learnMore(recommendation);
        break;
      case 'calculate':
        this.calculate(recommendation);
        break;
      default:
        console.log('Unknown action:', actionHandler);
    }
  }

  private viewProperty(recommendation: Recommendation) {
    console.log('View property clicked:', recommendation);
    // Handle view property logic here
  }

  private learnMore(recommendation: Recommendation) {
    console.log('Learn more clicked:', recommendation);
    // Handle learn more logic here
  }

  private calculate(recommendation: Recommendation) {
    console.log('Calculate clicked:', recommendation);
    // Handle calculate logic here
  }
}