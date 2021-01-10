import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.scss']
})
export class CourseContainerComponent implements OnInit {
  @Input() typeShow: 'all' | 'featured' = 'all';
  courses = [];
  constructor() { }

  ngOnInit(): void {
  }

}
