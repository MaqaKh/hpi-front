import { Component } from '@angular/core';

@Component({
  selector: 'app-price-alerts',
  templateUrl: './price-alerts.component.html',
  styleUrls: ['./price-alerts.component.scss']
})
export class PriceAlertsComponent {

  constructor() { }

  onViewProperties() {
    // Handle view properties action
    console.log('View properties clicked');
  }

  onDismissAlert() {
    // Handle dismiss alert action
    console.log('Dismiss alert clicked');
  }

  onViewApartment() {
    // Handle view apartment action
    console.log('View apartment clicked');
  }

  onSaveForLater() {
    // Handle save for later action
    console.log('Save for later clicked');
  }

  onContactAgent() {
    // Handle contact agent action
    console.log('Contact agent clicked');
  }

  onUpdateAlert() {
    // Handle update alert action
    console.log('Update alert clicked');
  }
}