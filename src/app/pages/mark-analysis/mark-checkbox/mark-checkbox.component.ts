import { Component, OnInit } from '@angular/core';

interface NisangahItem {
  name: string;
  displayText: string;
  selected: boolean;
  visible: boolean;
}

@Component({
  selector: 'app-mark-checkbox',
  templateUrl: './mark-checkbox.component.html',
  styleUrls: ['./mark-checkbox.component.scss']
})
export class MarkCheckboxComponent implements OnInit {
  searchTerm = '';
  selectedItems = new Set<string>();
  
  nisangahItems: NisangahItem[] = [
    { name: 'abşeron ticarət mərkəzi', displayText: 'Abşeron Ticarət Mərkəzi', selected: false, visible: true },
    { name: 'ağ şəhər', displayText: 'Ağ şəhər', selected: false, visible: true },
    { name: 'axundov bağı', displayText: 'Axundov bağı', selected: false, visible: true },
    { name: 'asan xidmət №1', displayText: 'ASAN Xidmət №1', selected: false, visible: true },
    { name: 'asan xidmət №2', displayText: 'ASAN Xidmət №2', selected: false, visible: true },
    { name: 'asan xidmət №3', displayText: 'ASAN Xidmət №3', selected: false, visible: true },
    { name: 'asan xidmət №5', displayText: 'ASAN Xidmət №5', selected: false, visible: true },
    { name: 'dağüstü parkı', displayText: 'Dağüstü parkı', selected: false, visible: true },
    { name: 'dim', displayText: 'DİM', selected: false, visible: true },
    { name: 'dostluq kinoteatrı', displayText: 'Dostluq kinoteatrı', selected: false, visible: true },
    { name: 'dövlət idarəçilik akademiyası', displayText: 'Dövlət İdarəçilik Akademiyası', selected: false, visible: true },
    { name: 'dövlət statistika komitəsi', displayText: 'Dövlət Statistika Komitəsi', selected: false, visible: true },
    { name: 'elit ticarət mərkəzi', displayText: 'Elit Ticarət Mərkəzi', selected: false, visible: true },
    { name: 'eurohome biləcəri ticarət mərkəzi', displayText: 'Eurohome Biləcəri Ticarət Mərkəzi', selected: false, visible: true },
    { name: 'm.hüseynzadə parkı', displayText: 'M.Hüseynzadə parkı', selected: false, visible: true },
    { name: 'melissa park', displayText: 'Melissa Park', selected: false, visible: true },
    { name: 'memarlıq və inşaat universiteti', displayText: 'Memarlıq və İnşaat Universiteti', selected: false, visible: true },
    { name: 'meyvəli ticarət mərkəzi', displayText: 'Meyvəli Ticarət Mərkəzi', selected: false, visible: true },
    { name: 'mərkəzi nəbatat bağı', displayText: 'Mərkəzi Nəbatat bağı', selected: false, visible: true },
    { name: 'mərkəzi park', displayText: 'Mərkəzi Park', selected: false, visible: true },
    { name: 'mərkəzi univerməq', displayText: 'Mərkəzi Univerməq', selected: false, visible: true },
    { name: 'sevil qaziyeva parkı', displayText: 'Sevil Qaziyeva parkı', selected: false, visible: true },
    { name: 'sədrək elit', displayText: 'Sədrək "Elit"', selected: false, visible: true },
    { name: 'sədrək xalça bazarı', displayText: 'Sədrək xalça bazarı', selected: false, visible: true },
    { name: 'sədrək şirniyyat bazarı', displayText: 'Sədrək şirniyyat bazarı', selected: false, visible: true },
    { name: 'sədrək tekstil bazarı', displayText: 'Sədrək tekstil bazarı', selected: false, visible: true },
    { name: 'sədrək təsərrüfat bazarı', displayText: 'Sədrək təsərrüfat bazarı', selected: false, visible: true },
    { name: 'sədrək ticarət mərkəzi', displayText: 'Sədrək Ticarət Mərkəzi', selected: false, visible: true }
  ];

  ngOnInit() {
    this.updateSelectedItems();
  }

  onSearch() {
    const searchLower = this.searchTerm.toLowerCase();
    this.nisangahItems.forEach(item => {
      item.visible = item.name.includes(searchLower);
    });
  }

  toggleItem(item: NisangahItem) {
    item.selected = !item.selected;
    this.updateSelectedItems();
  }

  clearAll() {
    this.nisangahItems.forEach(item => {
      item.selected = false;
    });
    this.updateSelectedItems();
  }

  applySelection() {
    if (this.selectedItems.size > 0) {
      const selectedNames = Array.from(this.selectedItems);
      alert(`Seçildi: ${selectedNames.join(', ')}`);
      // Here you would typically emit an event or call a service
    }
  }

  private updateSelectedItems() {
    this.selectedItems.clear();
    this.nisangahItems.forEach(item => {
      if (item.selected) {
        this.selectedItems.add(item.name);
      }
    });
  }

  get visibleItemsCount(): number {
    return this.nisangahItems.filter(item => item.visible).length;
  }

  get selectedCount(): number {
    return this.selectedItems.size;
  }

  get isApplyDisabled(): boolean {
    return this.selectedItems.size === 0;
  }
}