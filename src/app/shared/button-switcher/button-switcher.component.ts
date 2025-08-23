import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

export interface SwitcherOption {
  id: string;
  label: string;
  value: any;
  disabled?: boolean;
  icon?: string;
}

@Component({
  selector: 'app-button-switcher',
  templateUrl: './button-switcher.component.html',
  styleUrls: ['./button-switcher.component.scss']
})
export class ButtonSwitcherComponent implements OnInit {

  @Input() options: SwitcherOption[] = [
    {
      id: 'search',
      label: 'Search Property',
      value: 'search'
    },
    {
      id: 'analyze',
      label: 'Analyze Market',
      value: 'analyze'
    }
  ];

  @Input() selectedValue: any = 'search';
  @Input() disabled: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() variant: 'default' | 'rounded' | 'pills' = 'rounded';

  @Output() selectionChange = new EventEmitter<SwitcherOption>();
  @Output() valueChange = new EventEmitter<any>();

  selectedOption: SwitcherOption | null = null;

  ngOnInit(): void {
    this.updateSelectedOption();
  }

  ngOnChanges(): void {
    this.updateSelectedOption();
  }

  private updateSelectedOption(): void {
    this.selectedOption = this.options.find(option => option.value === this.selectedValue) || this.options[0] || null;
  }

  onOptionSelect(option: SwitcherOption): void {
    if (option.disabled || this.disabled) {
      return;
    }

    if (option.value === this.selectedValue) {
      return; // Already selected
    }

    this.selectedValue = option.value;
    this.selectedOption = option;
    
    this.selectionChange.emit(option);
    this.valueChange.emit(option.value);
  }

  isSelected(option: SwitcherOption): boolean {
    return option.value === this.selectedValue;
  }

  getOptionClass(option: SwitcherOption): string {
    const classes = ['switcher-option'];
    
    if (this.isSelected(option)) {
      classes.push('active');
    }
    
    if (option.disabled) {
      classes.push('disabled');
    }
    
    return classes.join(' ');
  }

  trackByOptionId(index: number, option: SwitcherOption): string {
    return option.id;
  }
}
