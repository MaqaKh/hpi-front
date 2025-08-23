import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  onAnalyze() {
    console.log('Analyze clicked');
    // Add your analyze logic here
  }

  onSearch() {
    console.log('Search clicked');
    // Add your search logic here
  }
}
