import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() current = 1;
  @Input() total = 10;
  @Input() maxPages = 5;
  @Output() pageChange = new EventEmitter<number>();

  get pages(): number[] {
    const total = Math.max(1, Math.floor(this.total));
    const current = Math.min(Math.max(1, Math.floor(this.current)), total);
    const max = Math.max(1, Math.floor(this.maxPages));

    let start = Math.max(1, current - Math.floor(max / 2));
    let end = start + max - 1;
    if (end > total) {
      end = total;
      start = Math.max(1, end - max + 1);
    }

    const pages: number[] = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  select(page: number) {
    const p = Math.min(Math.max(1, Math.floor(page)), Math.max(1, Math.floor(this.total)));
    if (p === this.current) return;
    this.pageChange.emit(p);
  }

  prev() {
    this.select(this.current - 1);
  }

  next() {
    this.select(this.current + 1);
  }
}
