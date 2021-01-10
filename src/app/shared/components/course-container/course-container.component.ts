import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from 'src/app/shared/service/course.service';
import { Course } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.scss']
})
export class CourseContainerComponent implements OnInit {
  @Input() typeShow: 'all' | 'featured' = 'all';
  courses: Course[];
  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(
      courses => this.courses = courses
    );
  }

}
