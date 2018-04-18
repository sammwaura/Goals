import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalFromComponent } from './goal-form.component';

describe('GoalFromComponent', () => {
  let component: GoalFromComponent;
  let fixture: ComponentFixture<GoalFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
