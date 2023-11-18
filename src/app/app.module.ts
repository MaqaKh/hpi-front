import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContentComponent } from './home/content/content.component';
import { PriceChangeComponent } from './home/content/price-change/price-change.component';
import { PopularAreasComponent } from './home/content/popular-areas/popular-areas.component';

import { DxChartModule,DxSelectBoxModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PriceChangeComponent,
    PopularAreasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxChartModule,
    DxSelectBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
