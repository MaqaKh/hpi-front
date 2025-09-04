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

    // Get all path elements in the SVG
    const paths = svgElement.querySelectorAll('path');
    
    paths.forEach((path: SVGPathElement, index: number) => {
      // Skip mask paths
      if (path.getAttribute('mask')) {
        return;
      }

      // Set initial styles
      path.style.cursor = 'pointer';
      path.style.transition = 'all 0.3s ease';
      
      // Add data attribute for identification
      path.setAttribute('data-district', `district-${index + 1}`);

      // Add hover listeners
      path.addEventListener('mouseenter', () => this.onDistrictHover(path, index));
      path.addEventListener('mouseleave', () => this.onDistrictLeave(path));
      path.addEventListener('click', () => this.onDistrictClick(path, index));
    });
  }

  private onDistrictHover(path: SVGPathElement, index: number): void {
    // Change fill color and add white stroke on hover
    path.style.fill = '#D4DDE8';
    path.style.stroke = '#FFFFFF';
    path.style.strokeWidth = '3';
    path.style.filter = 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))';
  }

  private onDistrictLeave(path: SVGPathElement): void {
    // Reset to original styles unless selected
    if (this.selectedDistrict !== path.getAttribute('data-district')) {
      path.style.fill = '#EAEAEA';
      path.style.stroke = '#EAEAEA';
      path.style.strokeWidth = '1';
      path.style.filter = 'none';
    }
  }

  private onDistrictClick(path: SVGPathElement, index: number): void {
    const districtId = path.getAttribute('data-district');
    
    // Reset all other paths
    const svgElement = this.elementRef.nativeElement.querySelector('#baku-map');
    const allPaths = svgElement.querySelectorAll('path');
    
    allPaths.forEach((p: SVGPathElement) => {
      if (p.getAttribute('mask')) return;
      
      if (p !== path) {
        p.style.fill = '#EAEAEA';
        p.style.stroke = '#EAEAEA';
        p.style.strokeWidth = '1';
        p.style.filter = 'none';
      }
    });

    // Set selected district
    this.selectedDistrict = districtId;
    
    // Apply selected styles
    path.style.fill = '#B8C9D8';
    path.style.stroke = '#FFFFFF';
    path.style.strokeWidth = '4';
    path.style.filter = 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.15))';

    // Emit event or handle district selection
    this.onDistrictSelected(districtId, index);
  }

  private onDistrictSelected(districtId: string | null, index: number): void {
    console.log(`District selected: ${districtId} (Index: ${index})`);
    // Here you can emit an event to parent component or handle the selection
    // this.districtSelected.emit({ id: districtId, index: index });
  }

  resetSelection(): void {
    this.selectedDistrict = null;
    
    const svgElement = this.elementRef.nativeElement.querySelector('#baku-map');
    if (!svgElement) return;

    const paths = svgElement.querySelectorAll('path');
    
    paths.forEach((path: SVGPathElement) => {
      if (path.getAttribute('mask')) return;
      
      path.style.fill = '#EAEAEA';
      path.style.stroke = '#EAEAEA';
      path.style.strokeWidth = '1';
      path.style.filter = 'none';
    });
  }
}
