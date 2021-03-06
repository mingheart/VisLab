import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bar_BasicComponent } from './Bar/bar_basic.component';
import { Line_BasicComponent } from './Line/line_basic.component';
import { Pie_BasicComponent } from './Pie/pie_basic.component';
import { Polar_BasicComponent } from './Polar/polar_basic.component';
import { Scatter3D_BasicComponent } from './Scatter3D/scatter3d_basic.component';
import { Radar_BasicComponent } from './radar/radar_basic.component';
import { Bar3D_BasicComponent } from './Bar3D/bar3d_basic.component';
import { Scatter_BasicComponent } from './Scatter/scatter_basic.component';
import { Covid19_Component } from './COVID19/covid19.component';
import { ComboChartsComponent } from './ComboCharts/combocharts.component';
import { BMap_BasicComponent } from './BMap/bmap_basic.component';
import { Map_BasicComponent } from './Map/map_basic.component';
import { TimeLineComponent } from './TimeLine/timeline_basic.component';
import { Calendar_BasicComponent } from './Calendar/calendar_basic.component';
import { DouluoDalu_Component } from './DouluoDalu/douluodalu.component';
import { History_Component } from './History/history.component';

const routes: Routes = [
  {
    path: 'basic/bar', component: Bar_BasicComponent,
  },
  {
    path: 'basic/line', component: Line_BasicComponent,
  },
  {
    path: 'basic/pie', component: Pie_BasicComponent,
  },
  {
    path: 'basic/polar', component: Polar_BasicComponent,
  },
  {
    path: 'basic/radar', component: Radar_BasicComponent,
  },
  {
    path: 'basic/scatter', component: Scatter_BasicComponent,
  },
  {
    path: 'basic/bmap', component: BMap_BasicComponent,
  },
  {
    path: 'basic/map', component: Map_BasicComponent,
  },
  {
    path: 'basic/calendar', component: Calendar_BasicComponent,
  },
  {
    path: '3d/scatter3d', component: Scatter3D_BasicComponent,
  },
  {
    path: '3d/bar3d', component: Bar3D_BasicComponent,
  },
  {
    path: 'advance/combocharts', component: ComboChartsComponent,
  },
  {
    path: 'advance/timeline', component: TimeLineComponent,
  },
  {
    path: 'demo/covid19', component: Covid19_Component,
  },
  {
    path: 'demo/douluodalu', component: DouluoDalu_Component,
  },
  {
    path: 'demo/history', component: History_Component,
  },
  {
    path: '', redirectTo: 'basic/bar', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
