import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SocialMediaComponent } from './social-media/social-media.component';

const routes: Routes = [
  { path: '', component: SocialMediaComponent }
];

@NgModule({
  declarations: [

    SocialMediaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SocialMediaModule { }
