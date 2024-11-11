import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import {RouterModule, Routes} from "@angular/router";
import { AnalyticsComponent } from './analytics/analytics.component';
import {SharedModule} from "../../shared/shared.module";
const routes: Routes = [
  { path: '', component: AnalyticsComponent },
];

@NgModule({
  declarations: [
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AnalyticsModule { }
