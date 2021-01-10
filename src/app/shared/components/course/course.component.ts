import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() curso: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
