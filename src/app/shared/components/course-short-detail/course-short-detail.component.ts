import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-short-detail',
  templateUrl: './course-short-detail.component.html',
  styleUrls: ['./course-short-detail.component.scss']
})
export class CourseShortDetailComponent implements OnInit {
  @Input() course;
  constructor() { }

  ngOnInit(): void {
  }

}
