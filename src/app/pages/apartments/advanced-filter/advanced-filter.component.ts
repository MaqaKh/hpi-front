import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrls: ['./advanced-filter.component.scss']
})
export class AdvancedFilterComponent {
  @Output() close = new EventEmitter<void>();
  @Output() apply = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  onClose() { this.close.emit(); }
  onApply() { this.apply.emit(); }
  onReset() { this.reset.emit(); }
}
