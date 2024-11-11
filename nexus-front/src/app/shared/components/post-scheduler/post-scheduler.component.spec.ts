import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSchedulerComponent } from './post-scheduler.component';

describe('PostSchedulerComponent', () => {
  let component: PostSchedulerComponent;
  let fixture: ComponentFixture<PostSchedulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostSchedulerComponent]
    });
    fixture = TestBed.createComponent(PostSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
