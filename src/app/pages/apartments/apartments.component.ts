import { Component, ViewChild } from '@angular/core';
import { Listing } from './listings/listings.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent {
  // mock listings provided to the child ListingsComponent
  listings: Listing[] = [
    { id: '1', title: 'Cozy 2-Bedroom Apartment in City Center', price: '₼ 250,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQs_4bZX_Q2mnMBlFiHBkev035eHLz_22ypMRQNktPt0jJzvaPAgNSO3bPpkvSlyjkfubkh-O9IaI-BfEtiU6ktCfkiHO6Ax5ScFLcjWWq8FkPbmT0R064oKKVCDCwi4PZYDIcVVpIlFA0pR6AdRoECMa9KXTx7EtQfeOwctpepZZOkm8QcPhFJ_6kkoog4kJJ1fO8NHxdWgxmwJFb6HQdCzM4g4e58y0Gkfx5tNkw2sC0RmoAxp1SLM9sJiyKQxhwaLX8BIuwZ_k', badge: 'New Listing', beds: '2 beds', baths: '2 baths', size: '120 sq m', agentName: 'John Doe', agentImage: 'https://via.placeholder.com/80?text=JD' },
    { id: '2', title: 'Spacious 3-Bedroom Family Home', price: '₼ 480,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKzuxzHCgeoLV3apUKKCx7oa8y3VfLfZlEmr3sLd4maccVVyH7jb1IiTLUjri0N08bcvohkILdnAvythayvzfOjRpX2rvVO9Gp9J4ZhGGiurIxcD3TG2Je7svUEQdUTv6GMRPDhvyhdnI6HebXehi0_f0l1p4PawXeFxMC_yaMIkXLHzrqqLizEt1YyNczV1cZwqcJTGtzmY4aT5NTJMQjrOypIAPrfyyIf9SvHX_weI86JIBV7i6VP0e-JBkcUWRLY_qigHwQpQE', badge: 'Price Reduced', beds: '3 beds', baths: '2 baths', size: '180 sq m', agentName: 'Michael Chen', agentImage: 'https://via.placeholder.com/80?text=MC' },
    { id: '3', title: 'Luxury Penthouse with City Views', price: '₼ 1,200,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbE3GIdx_-7gbnFEvOF-kv-3Ehw61rvI7AMKJPd47Sl49IXvn3TYw_-RWu7WFP6TajQyxOcLOA1GIeWvHKwRAtkFWI3li8NPXUJf4Tu9NE75TQju4bzCzlEhkmoANVJgH2niFg_HCLPIlJxBfjQDJlA1hPohgRH1JskcAokC7YH0pGkinX2QwwQOdMK0KaXQPnDzenxIz79Wj01-0HksnHQHPqCWSzs5olABACPI28k-ZEJhEzeJtD5cjP9vAXX128ire0kXFvzmE', beds: '4 beds', baths: '3 baths', size: '250 sq m', agentName: 'Sarah Johnson', agentImage: 'https://via.placeholder.com/80?text=SJ' },
    { id: '4', title: 'Modern Studio Apartment with Balcony', price: '₼ 180,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMtzW0_5DCH8lkdj2hbSsCKwVzmh-KmJ4GyIV1YBxp6jhiD-dH3-tGft2M9LzpjnJLYig9IYT9VH-TRPKiaLGad-_rsKo4GaBROEsexzK1wbKdIn4_y30LOeusgBiaxKU9Uq-4PuJ2PeHOOcpDwIjOulK3J08XWEzkhhg6_sJ8MxFcJxF4rb_o_yz1OtgT3hvIAxOaAoyJgD01PXY-vKKOeheOJU1eM-uhtAHfLv1S5Q07jF1At7QlFFf4-yWnLVI-hN21Y25BTWc', beds: '1 bed', baths: '1 bath', size: '60 sq m', agentName: 'Emily White', agentImage: 'https://via.placeholder.com/80?text=EW' },
  { id: '5', title: 'Small Family Home', price: '₼ 320,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQs_4bZX_Q2mnMBlFiHBkev035eHLz_22ypMRQNktPt0jJzvaPAgNSO3bPpkvSlyjkfubkh-O9IaI-BfEtiU6ktCfkiHO6Ax5ScFLcjWWq8FkPbmT0R064oKKVCDCwi4PZYDIcVVpIlFA0pR6AdRoECMa9KXTx7EtQfeOwctpepZZOkm8QcPhFJ_6kkoog4kJJ1fO8NHxdWgxmwJFb6HQdCzM4g4e58y0Gkfx5tNkw2sC0RmoAxp1SLM9sJiyKQxhwaLX8BIuwZ_k', beds: '3 beds', baths: '2 baths', size: '140 sq m', agentName: 'Agent A', agentImage: 'https://via.placeholder.com/80?text=A' },
  { id: '6', title: 'Sunny One-Bedroom', price: '₼ 150,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKzuxzHCgeoLV3apUKKCx7oa8y3VfLfZlEmr3sLd4maccVVyH7jb1IiTLUjri0N08bcvohkILdnAvythayvzfOjRpX2rvVO9Gp9J4ZhGGiurIxcD3TG2Je7svUEQdUTv6GMRPDhvyhdnI6HebXehi0_f0l1p4PawXeFxMC_yaMIkXLHzrqqLizEt1YyNczV1cZwqcJTGtzmY4aT5NTJMQjrOypIAPrfyyIf9SvHX_weI86JIBV7i6VP0e-JBkcUWRLY_qigHwQpQE', beds: '1 bed', baths: '1 bath', size: '55 sq m', agentName: 'Agent B', agentImage: 'https://via.placeholder.com/80?text=B' },
  { id: '7', title: 'Comfortable 2-Bedroom', price: '₼ 270,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbE3GIdx_-7gbnFEvOF-kv-3Ehw61rvI7AMKJPd47Sl49IXvn3TYw_-RWu7WFP6TajQyxOcLOA1GIeWvHKwRAtkFWI3li8NPXUJf4Tu9NE75TQju4bzCzlEhkmoANVJgH2niFg_HCLPIlJxBfjQDJlA1hPohgRH1JskcAokC7YH0pGkinX2QwwQOdMK0KaXQPnDzenxIz79Wj01-0HksnHQHPqCWSzs5olABACPI28k-ZEJhEzeJtD5cjP9vAXX128ire0kXFvzmE', beds: '2 beds', baths: '2 baths', size: '110 sq m', agentName: 'Agent C', agentImage: 'https://via.placeholder.com/80?text=C' },
  { id: '8', title: 'Elegant 4-Bedroom Villa', price: '₼ 980,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMtzW0_5DCH8lkdj2hbSsCKwVzmh-KmJ4GyIV1YBxp6jhiD-dH3-tGft2M9LzpjnJLYig9IYT9VH-TRPKiaLGad-_rsKo4GaBROEsexzK1wbKdIn4_y30LOeusgBiaxKU9Uq-4PuJ2PeHOOcpDwIjOulK3J08XWEzkhhg6_sJ8MxFcJxF4rb_o_yz1OtgT3hvIAxOaAoyJgD01PXY-vKKOeheOJU1eM-uhtAHfLv1S5Q07jF1At7QlFFf4-yWnLVI-hN21Y25BTWc', beds: '4 beds', baths: '4 baths', size: '350 sq m', agentName: 'Agent D', agentImage: 'https://via.placeholder.com/80?text=D' }
  ];

  // pagination state
  currentPage = 1;
  pageSize = 8; // items per page

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.listings.length / this.pageSize));
  }

  get pagedListings(): Listing[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.listings.slice(start, start + this.pageSize);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    // If you fetch data from server on page change, do it here.
  }

  // advanced filter modal state
  showAdvancedFilter = false;

  @ViewChild(FilterBarComponent) filterBar?: FilterBarComponent;

  onOpenAdvancedFilters() {
    this.showAdvancedFilter = true;
  }

  onAdvancedApply(_: any) {
    // read current filters from the filter bar and apply
    const filters = this.filterBar?.getFilterValues();
    console.log('Advanced filters applied. Current filters from bar:', filters);
    this.showAdvancedFilter = false;
    // TODO: apply filters to the listings or fetch from server
  }

  onAdvancedReset() {
    // reset filter bar and keep modal open
    this.filterBar?.resetFilters();
  }
}
