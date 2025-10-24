import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-interactive-metro-map',
  templateUrl: './interactive-metro-map.component.html',
  styleUrls: ['./interactive-metro-map.component.scss']
})
export class InteractiveMetroMapComponent implements OnInit, AfterViewInit {

  selectedMetroStation: string | null = null;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initializeMapInteractions();
  }

  private initializeMapInteractions(): void {
    const svgElement = this.elementRef.nativeElement.querySelector('#baku-metro-map');
    if (!svgElement) return;

    // Get all station circles
    const stationCircles = svgElement.querySelectorAll('circle');
    
    stationCircles.forEach((circle: SVGCircleElement, index: number) => {
      // Set cursor on the circle
      circle.style.cursor = 'pointer';
      circle.style.transition = 'all 0.3s ease';
      
      // Create station identifier
      const stationId = `station-${index + 1}`;
      circle.setAttribute('data-station', stationId);

      // Add event listeners to the circle
      circle.addEventListener('mouseenter', () => this.onStationHover(circle, stationId));
      circle.addEventListener('mouseleave', () => this.onStationLeave(circle, stationId));
      circle.addEventListener('click', () => this.onStationClick(circle, stationId));
    });

    // Also handle metro lines (paths)
    const metroLines = svgElement.querySelectorAll('path');
    metroLines.forEach((path: SVGPathElement, index: number) => {
      path.style.cursor = 'pointer';
      path.style.transition = 'all 0.3s ease';
      
      const lineId = `line-${index + 1}`;
      path.setAttribute('data-line', lineId);

      path.addEventListener('mouseenter', () => this.onLineHover(path, lineId));
      path.addEventListener('mouseleave', () => this.onLineLeave(path, lineId));
      path.addEventListener('click', () => this.onLineClick(path, lineId));
    });
  }

  private onStationHover(circle: SVGCircleElement, stationId: string): void {
    circle.style.fill = '#3b82f6';
    circle.style.stroke = '#1e40af';
    circle.style.strokeWidth = '3';
    circle.style.filter = 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))';
    circle.style.transform = 'scale(1.2)';
  }

  private onStationLeave(circle: SVGCircleElement, stationId: string): void {
    if (this.selectedMetroStation !== stationId) {
      circle.style.fill = 'white';
      circle.style.stroke = 'black';
      circle.style.strokeWidth = '1';
      circle.style.filter = 'none';
      circle.style.transform = 'scale(1)';
    }
  }

  private onStationClick(circle: SVGCircleElement, stationId: string): void {
    // Reset all stations first
    this.resetAllStations();

    // Set selected station
    this.selectedMetroStation = stationId;
    
    // Apply selected styles to this station
    circle.style.fill = '#1e40af';
    circle.style.stroke = '#1e3a8a';
    circle.style.strokeWidth = '4';
    circle.style.filter = 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.3))';
    circle.style.transform = 'scale(1.3)';

    console.log(`Metro station selected: ${stationId}`);
  }

  private onLineHover(path: SVGPathElement, lineId: string): void {
    path.style.filter = 'brightness(1.2) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))';
    path.style.strokeWidth = '8';
  }

  private onLineLeave(path: SVGPathElement, lineId: string): void {
    path.style.filter = 'none';
    path.style.strokeWidth = '6';
  }

  private onLineClick(path: SVGPathElement, lineId: string): void {
    console.log(`Metro line selected: ${lineId}`);
  }

  private resetAllStations(): void {
    const svgElement = this.elementRef.nativeElement.querySelector('#baku-metro-map');
    if (!svgElement) return;

    // Reset all station circles
    const stationCircles = svgElement.querySelectorAll('circle');
    stationCircles.forEach((circle: SVGCircleElement) => {
      circle.style.fill = 'white';
      circle.style.stroke = 'black';
      circle.style.strokeWidth = '1';
      circle.style.filter = 'none';
      circle.style.transform = 'scale(1)';
    });
  }

  resetSelection(): void {
    this.selectedMetroStation = null;
    this.resetAllStations();
  }
}