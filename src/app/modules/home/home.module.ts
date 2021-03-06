import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
// import { CourseContainerComponent } from './pages/course-container/course-container.component';

@NgModule({
  declarations: [HomePageComponent, CourseDetailPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
