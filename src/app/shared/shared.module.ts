import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseContainerComponent } from './components/course-container/course-container.component';
import { CourseComponent } from './components/course/course.component';
import { CourseShortDetailComponent } from './components/course-short-detail/course-short-detail.component';



@NgModule({
  declarations: [CourseContainerComponent, CourseComponent, CourseShortDetailComponent],
  imports: [
    CommonModule
  ], exports: [
    CourseComponent,
    CourseContainerComponent,
    CourseShortDetailComponent
  ]
})
export class SharedModule { }
