import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { MarketStatsComponent } from './pages/market-stats/market-stats.component';
import { MarketHotspotsComponent } from './pages/market-hotspots/market-hotspots.component';
import { EconomicContextComponent } from './pages/economic-context/economic-context.component';
import { UserCentricInfoComponent } from './pages/user-centric-info/user-centric-info.component';
import { QuickActionTilesComponent } from './pages/quick-action-tiles/quick-action-tiles.component';
import { MarketIntelligenceFeedComponent } from './pages/market-intelligence-feed/market-intelligence-feed.component';
import { ButtonSwitcherComponent } from './shared/button-switcher/button-switcher.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DistrictAnalysisComponent } from './pages/district-analysis/district-analysis.component';
import { MetroAnalysisComponent } from './pages/metro-analysis/metro-analysis.component';
import { InteractiveMapComponent } from './shared/interactive-map/interactive-map.component';
import { InteractiveMetroMapComponent } from './shared/interactive-metro-map/interactive-metro-map.component';
import { MarketStatisticsComponent } from './shared/market-statistics/market-statistics.component';
import { PriceTrendChartComponent } from './shared/price-trend-chart/price-trend-chart.component';
import { FeaturedPropertiesComponent } from './shared/featured-properties/featured-properties.component';
import { DistrictInfoComponent } from './shared/district-info/district-info.component';
import { HeaderComponent } from './shared/header/header.component';
import { ApartmentsComponent } from './pages/apartments/apartments.component';
import { FilterBarComponent } from './pages/apartments/filter-bar/filter-bar.component';
import { ActiveFiltersComponent } from './pages/apartments/active-filters/active-filters.component';
import { FilterHeaderComponent } from './pages/apartments/filter/filter-header.component';
import { ListingsComponent } from './pages/apartments/listings/listings.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { AdvancedFilterComponent } from './pages/apartments/advanced-filter/advanced-filter.component';
import { MarkAnalysisComponent } from './pages/mark-analysis/mark-analysis.component';
import { MarkCheckboxComponent } from './pages/mark-analysis/mark-checkbox/mark-checkbox.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PriceAlertsComponent } from './pages/dashboard/price-alerts/price-alerts.component';
import { FollowingComponent } from './pages/dashboard/following/following.component';
import { SavedApartmentComponent } from './pages/dashboard/saved-apartment/saved-apartment.component';
import { PerformanceComponent } from './pages/dashboard/performance/performance.component';
import { RecommendationComponent } from './pages/dashboard/recommendation/recommendation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MarketStatsComponent,
    MarketHotspotsComponent,
    EconomicContextComponent,
    UserCentricInfoComponent,
    QuickActionTilesComponent,
    MarketIntelligenceFeedComponent,
    ButtonSwitcherComponent,
    FooterComponent,
    DistrictAnalysisComponent,
    MetroAnalysisComponent,
    InteractiveMapComponent,
    InteractiveMetroMapComponent,
    MarketStatisticsComponent,
    PriceTrendChartComponent,
    FeaturedPropertiesComponent,
    DistrictInfoComponent,
    HeaderComponent,
    ApartmentsComponent,
    FilterHeaderComponent,
    ListingsComponent,
    PaginationComponent,
    AdvancedFilterComponent,
    MarkAnalysisComponent,
    MarkCheckboxComponent,
    DashboardComponent,
    PriceAlertsComponent,
    FollowingComponent,
    SavedApartmentComponent,
    PerformanceComponent,
    RecommendationComponent,
    ActiveFiltersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    FilterBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
