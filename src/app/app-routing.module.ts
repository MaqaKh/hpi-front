import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DistrictAnalysisComponent } from './pages/district-analysis/district-analysis.component';
import { MetroAnalysisComponent } from './pages/metro-analysis/metro-analysis.component';
import { ApartmentsComponent } from './pages/apartments/apartments.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'district-analysis', component: DistrictAnalysisComponent },
  { path: 'metro-analysis', component: MetroAnalysisComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
