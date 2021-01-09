import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';


@NgModule({
  declarations: [HomePageComponent, CourseDetailPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
