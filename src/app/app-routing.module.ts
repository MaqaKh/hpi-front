import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DistrictAnalysisComponent } from './pages/district-analysis/district-analysis.component';
import { MetroAnalysisComponent } from './pages/metro-analysis/metro-analysis.component';
import { ApartmentsComponent } from './pages/apartments/apartments.component';
import { MarkAnalysisComponent } from './pages/mark-analysis/mark-analysis.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'district-analysis', component: DistrictAnalysisComponent },
  { path: 'metro-analysis', component: MetroAnalysisComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'mark-analysis', component: MarkAnalysisComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
