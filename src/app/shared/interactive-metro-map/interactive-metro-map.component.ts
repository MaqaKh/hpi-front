import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-interactive-metro-map',
  templateUrl: './interactive-metro-map.component.html',
  styleUrls: ['./interactive-metro-map.component.scss']
})
export class InteractiveMetroMapComponent implements OnInit, AfterViewInit {

  selectedMetroStation: string | null = null;
  hoveredStationName: string | null = null;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initializeMapInteractions();
  }

  private initializeMapInteractions(): void {
    console.log('Initializing metro map interactions...');
    const svgElement = this.elementRef.nativeElement.querySelector('#baku-metro-map svg');
    if (!svgElement) {
      console.log('SVG element not found!');
      return;
    }

    console.log('SVG element found:', svgElement);

    // Get all station groups
    const stationGroups = svgElement.querySelectorAll('g[class]');
    console.log('Found station groups:', stationGroups.length);

    stationGroups.forEach((group: SVGGElement, index: number) => {
      // Set cursor on the group
      group.style.cursor = 'pointer';
      group.style.transition = 'all 0.3s ease';

      // Get class name for station identification
      const className = this.getElementClassName(group);
      console.log(`Group ${index}: className = "${className}"`);

      // Add event listeners to the group
      group.addEventListener('mouseenter', () => this.onStationHover(group, className));
      group.addEventListener('mouseleave', () => this.onStationLeave(group, className));
      group.addEventListener('click', () => this.onStationClick(group, className));
    });

    // Also handle metro lines (paths)
    const metroLines = svgElement.querySelectorAll('path');
    console.log('Found paths:', metroLines.length);

    metroLines.forEach((path: SVGPathElement, index: number) => {
      path.style.cursor = 'pointer';
      path.style.transition = 'all 0.3s ease';

      // Get class name for line identification
      const className = this.getElementClassName(path);
      console.log(`Path ${index}: className = "${className}"`);

      path.addEventListener('mouseenter', () => this.onLineHover(path, className));
      path.addEventListener('mouseleave', () => this.onLineLeave(path, className));
      path.addEventListener('click', () => this.onLineClick(path, className));
    });
  }

  private getElementClassName(element: SVGElement): string {
    // Get the first class name from the element's classList
    return element.classList.length > 0 ? element.classList[0] : 'unknown';
  }

  private onStationHover(group: SVGGElement, className: string): void {
    if (this.hoveredStationName === className) return; // Prevent infinite loop

    console.log(`Station hover: ${className}`);

    // If hovering over a different station, clear previous selection
    if (this.selectedMetroStation && this.selectedMetroStation !== className) {
      this.resetAllStations();
      this.selectedMetroStation = null;
    }

    this.hoveredStationName = className;

    // Highlight all circles in the group
    const circles = group.querySelectorAll('circle');
    circles.forEach((circle: SVGCircleElement) => {
      circle.style.fill = '#3b82f6';
      circle.style.stroke = '#1e40af';
      circle.style.strokeWidth = '2';
    });
  }

  private onStationLeave(group: SVGGElement, className: string): void {
    // Only clear hoveredStationName if this station is not selected
    if (this.selectedMetroStation !== className) {
      this.hoveredStationName = null;
    }

    if (this.selectedMetroStation !== className) {
      // Reset both group and corresponding path with same class
      this.highlightElementsByClass(className, false);

      const circles = group.querySelectorAll('circle');
      circles.forEach((circle: SVGCircleElement) => {
        circle.style.fill = 'white';
        circle.style.stroke = 'black';
        circle.style.strokeWidth = '1';
      });
    }
  }

  private onStationClick(group: SVGGElement, className: string): void {
    console.log(`Station clicked: ${className}`);

    // Reset all stations first
    this.resetAllStations();

    // Set selected station and keep it displayed
    this.selectedMetroStation = className;
    this.hoveredStationName = className; // Keep the name displayed

    // Apply selected styles to all circles in the group
    const circles = group.querySelectorAll('circle');
    circles.forEach((circle: SVGCircleElement) => {
      circle.style.fill = '#1e40af';
      circle.style.stroke = '#1e3a8a';
      circle.style.strokeWidth = '3';
    });

    console.log(`Metro station selected: ${className}`);
  }

  private onLineHover(path: SVGPathElement, className: string): void {
    console.log(`Line hover: ${className}`);
    this.hoveredStationName = className;

    // Highlight both path and corresponding circle with same class
    this.highlightElementsByClass(className, true);

    path.style.filter = 'brightness(1.2) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))';
    path.style.strokeWidth = '8';
  }

  private onLineLeave(path: SVGPathElement, className: string): void {
    this.hoveredStationName = null;

    // Reset both path and corresponding circle with same class
    this.highlightElementsByClass(className, false);

    path.style.filter = 'none';
    path.style.strokeWidth = '6';
  }

  private onLineClick(path: SVGPathElement, className: string): void {
    console.log(`Line clicked: ${className}`);
    console.log(`Metro line selected: ${className}`);
  }

  private highlightElementsByClass(className: string, highlight: boolean): void {
    const svgElement = this.elementRef.nativeElement.querySelector('#baku-metro-map svg');
    if (!svgElement) return;

    // Find all elements with the same class name
    const elements = svgElement.querySelectorAll(`.${className}`);

    elements.forEach((element: SVGElement) => {
      if (highlight) {
        element.style.filter = 'brightness(1.2)';
        if (element.tagName === 'path') {
          element.style.strokeWidth = '8';
        }
      } else if (this.selectedMetroStation !== className) {
        element.style.filter = 'none';
        if (element.tagName === 'path') {
          element.style.strokeWidth = '6';
        }
      }
    });
  }

  private resetAllStations(): void {
    const svgElement = this.elementRef.nativeElement.querySelector('#baku-metro-map svg');
    if (!svgElement) return;

    // Reset all station groups
    const stationGroups = svgElement.querySelectorAll('g[class]');
    stationGroups.forEach((group: SVGGElement) => {
      const circles = group.querySelectorAll('circle');
      circles.forEach((circle: SVGCircleElement) => {
        circle.style.fill = 'white';
        circle.style.stroke = 'black';
        circle.style.strokeWidth = '1';
      });
    });
  }

  resetSelection(): void {
    this.selectedMetroStation = null;
    this.hoveredStationName = null;
    this.resetAllStations();
  }
}