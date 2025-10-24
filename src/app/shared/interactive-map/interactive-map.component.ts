import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.scss']
})
export class InteractiveMapComponent implements OnInit, AfterViewInit {

  selectedDistrict: string | null = null;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initializeMapInteractions();
  }

  private initializeMapInteractions(): void {
    const svgElement = this.elementRef.nativeElement.querySelector('#baku-map');
    if (!svgElement) return;

    // Get all district groups
    const districtGroups = svgElement.querySelectorAll('.district-group');
    
    districtGroups.forEach((group: SVGGElement) => {
      // Extract district name from class (e.g., "district-group district-sabuncu" -> "sabuncu")
      const classList = Array.from(group.classList);
      const districtClass = classList.find(cls => cls.startsWith('district-') && cls !== 'district-group');
      const districtName = districtClass ? districtClass.replace('district-', '') : 'unknown';

      // Set cursor on the group
      group.style.cursor = 'pointer';

      // Add event listeners to the group
      group.addEventListener('mouseenter', () => this.onDistrictHover(group, districtName));
      group.addEventListener('mouseleave', () => this.onDistrictLeave(group, districtName));
      group.addEventListener('click', () => this.onDistrictClick(group, districtName));
    });

    // Also handle individual paths that aren't grouped
    const ungroupedPaths = svgElement.querySelectorAll('path:not(.district-group path)');
    ungroupedPaths.forEach((path: SVGPathElement, index: number) => {
      if (path.getAttribute('mask')) return;

      path.style.cursor = 'pointer';
      path.style.transition = 'all 0.3s ease';
      path.setAttribute('data-district', `ungrouped-${index + 1}`);

      path.addEventListener('mouseenter', () => this.onPathHover(path));
      path.addEventListener('mouseleave', () => this.onPathLeave(path));
      path.addEventListener('click', () => this.onPathClick(path, index));
    });
  }

  private onDistrictHover(group: SVGGElement, districtName: string): void {
    const paths = group.querySelectorAll('path');
    paths.forEach((path: SVGPathElement) => {
      path.style.fill = '#D4DDE8 !important';
      path.style.stroke = '#FFFFFF !important';
      path.style.strokeWidth = '3 !important';
      path.style.filter = 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1)) !important';
    });
  }

  private onDistrictLeave(group: SVGGElement, districtName: string): void {
    if (this.selectedDistrict !== districtName) {
      const paths = group.querySelectorAll('path');
      paths.forEach((path: SVGPathElement) => {
        path.style.fill = 'rgb(234, 234, 234) !important';
        path.style.stroke = 'rgb(234, 234, 234) !important';
        path.style.strokeWidth = '1 !important';
        path.style.filter = 'none !important';
      });
    }
  }

  private onDistrictClick(group: SVGGElement, districtName: string): void {
    // Reset all groups first
    this.resetAllDistricts();

    // Set selected district
    this.selectedDistrict = districtName;
    
    // Apply selected styles to this group
    const paths = group.querySelectorAll('path');
    paths.forEach((path: SVGPathElement) => {
      path.style.fill = '#B8C9D8 !important';
      path.style.stroke = '#FFFFFF !important';
      path.style.strokeWidth = '4 !important';
      path.style.filter = 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.15)) !important';
    });

    console.log(`District selected: ${districtName}`);
  }

  // Handle individual ungrouped paths
  private onPathHover(path: SVGPathElement): void {
    path.style.fill = '#D4DDE8';
    path.style.stroke = '#FFFFFF';
    path.style.strokeWidth = '3';
    path.style.filter = 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))';
  }

  private onPathLeave(path: SVGPathElement): void {
    if (this.selectedDistrict !== path.getAttribute('data-district')) {
      path.style.fill = '#EAEAEA';
      path.style.stroke = '#EAEAEA';
      path.style.strokeWidth = '1';
      path.style.filter = 'none';
    }
  }

  private onPathClick(path: SVGPathElement, index: number): void {
    const districtId = `ungruoped-${index + 1}`;
    this.resetAllDistricts();
    this.selectedDistrict = districtId;
    
    path.style.fill = '#B8C9D8';
    path.style.stroke = '#FFFFFF';
    path.style.strokeWidth = '4';
    path.style.filter = 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.15))';
  }

  private resetAllDistricts(): void {
    const svgElement = this.elementRef.nativeElement.querySelector('#baku-map');
    if (!svgElement) return;

    // Reset grouped districts
    const districtGroups = svgElement.querySelectorAll('.district-group');
    districtGroups.forEach((group: SVGGElement) => {
      const paths = group.querySelectorAll('path');
      paths.forEach((path: SVGPathElement) => {
        path.style.fill = 'rgb(234, 234, 234) !important';
        path.style.stroke = 'rgb(234, 234, 234) !important';
        path.style.strokeWidth = '1 !important';
        path.style.filter = 'none !important';
      });
    });

    // Reset ungrouped paths
    const ungroupedPaths = svgElement.querySelectorAll('path:not(.district-group path)');
    ungroupedPaths.forEach((path: SVGPathElement) => {
      if (path.getAttribute('mask')) return;
      path.style.fill = '#EAEAEA';
      path.style.stroke = '#EAEAEA';
      path.style.strokeWidth = '1';
      path.style.filter = 'none';
    });
  }

  resetSelection(): void {
    this.selectedDistrict = null;
    this.resetAllDistricts();
  }
}