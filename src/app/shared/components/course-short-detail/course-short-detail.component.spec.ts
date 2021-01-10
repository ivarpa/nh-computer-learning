import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseShortDetailComponent } from './course-short-detail.component';

describe('CourseShortDetailComponent', () => {
  let component: CourseShortDetailComponent;
  let fixture: ComponentFixture<CourseShortDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseShortDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseShortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
