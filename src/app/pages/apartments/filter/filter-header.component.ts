import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-header',
  templateUrl: './filter-header.component.html',
  styleUrls: ['./filter-header.component.scss']
})
export class FilterHeaderComponent {
  @Input() title: string = 'Apartments for sale in Baku';
  @Input() resultsCount: string = '1,234 results';
}
