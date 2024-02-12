import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContentComponent } from './home/content/content.component';
import { PriceChangeComponent } from './home/content/price-change/price-change.component';
import { PopularAreasComponent } from './home/content/popular-areas/popular-areas.component';

import { DxChartModule,DxPopupModule,DxSelectBoxModule } from 'devextreme-angular';
import { PopularEconomicDataComponent } from './home/content/popular-economic-data/popular-economic-data.component';
import { DetailComponent } from './detail/detail.component';
import { DetailContentComponent } from './detail/content/content.component';
import { SlickSliderComponent } from './shared/slick-slider/slick-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PriceChangeComponent,
    PopularAreasComponent,
    PopularEconomicDataComponent,
    DetailComponent,
    DetailContentComponent,
    SlickSliderComponent
  ],
  imports: [
    BrowserModule,
    DxPopupModule,
    AppRoutingModule,
    DxChartModule,
    DxSelectBoxModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
