import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostSchedulerComponent } from './components/post-scheduler/post-scheduler.component';
import { HeaderComponent } from './components/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PostSchedulerComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    PostSchedulerComponent,
    HeaderComponent,

    // Add other shared components, directives, or pipes here
  ]
})
export class SharedModule { }
