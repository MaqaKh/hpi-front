import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

declare var Chart: any; // Temporary declaration until Chart.js is installed

@Component({
  selector: 'app-price-trend-chart',
  templateUrl: './price-trend-chart.component.html',
  styleUrls: ['./price-trend-chart.component.scss']
})
export class PriceTrendChartComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  
  private chart: any = null;

  // Sample data for the price trend
  private chartData = {
    labels: [
      'Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024',
      'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024'
    ],
    datasets: [
      {
        label: 'Average Property Price',
        data: [1650, 1675, 1700, 1720, 1750, 1780, 1800, 1825, 1850, 1875, 1890, 1900],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    // Load Chart.js dynamically
    this.loadChartJS();
  }

  ngAfterViewInit(): void {
    // Chart will be created after Chart.js is loaded
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private loadChartJS(): void {
    // Create script element for Chart.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js';
    script.onload = () => {
      // Chart.js is loaded, now create the chart
      setTimeout(() => {
        this.createChart();
      }, 100);
    };
    document.head.appendChild(script);
  }

  private createChart(): void {
    if (typeof Chart === 'undefined') {
      console.error('Chart.js not loaded');
      return;
    }

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const config = {
      type: 'line',
      data: this.chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: '#3b82f6',
            borderWidth: 1,
            cornerRadius: 8,
            displayColors: false,
            callbacks: {
              label: (context: any) => {
                return `$${context.parsed.y.toLocaleString()}`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            border: {
              display: false
            },
            ticks: {
              color: '#64748b',
              font: {
                family: 'Inter',
                size: 12
              }
            }
          },
          y: {
            border: {
              display: false
            },
            grid: {
              color: 'rgba(226, 232, 240, 0.5)',
              drawBorder: false
            },
            ticks: {
              color: '#64748b',
              font: {
                family: 'Inter',
                size: 12
              },
              callback: (value: any) => {
                return '$' + value.toLocaleString();
              }
            }
          }
        },
        interaction: {
          intersect: false,
          mode: 'index'
        },
        elements: {
          point: {
            hoverBorderWidth: 3
          }
        },
        animation: {
          duration: 1000,
          easing: 'easeInOutQuart'
        }
      }
    };

    this.chart = new Chart(ctx, config);
  }

  // Method to update chart data (for future use)
  updateChartData(newData: number[]): void {
    if (this.chart && this.chart.data.datasets[0]) {
      this.chart.data.datasets[0].data = newData;
      this.chart.update();
    }
  }
}
