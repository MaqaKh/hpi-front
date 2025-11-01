import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {
  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      propertyType: [''],
      rooms: [''],
      minPrice: [''],
      maxPrice: ['']
    });

    // Subscribe to form value changes
    this.filterForm.valueChanges.subscribe(values => {
      this.onFilterChange(values);
    });
  }

  onFilterChange(filters: any): void {
    console.log('Filters changed:', filters);
    // Emit to parent component or service
    // Example: this.filterService.updateFilters(filters);
  }

  onMoreFilters(): void {
    console.log('More filters clicked');
    console.log('Current filters:', this.filterForm.value);
    // Add your logic for more filters here
    // Example: this.router.navigate(['/filters']);
    // Or open a modal: this.dialog.open(AdvancedFiltersComponent);
  }

  // Method to get filter values
  getFilterValues() {
    return this.filterForm.value;
  }

  // Method to reset filters
  resetFilters(): void {
    this.filterForm.reset();
  }

  // Method to set filters programmatically
  setFilters(filters: any): void {
    this.filterForm.patchValue(filters);
  }
}
