import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchflightscheduleComponent } from './searchflightschedule.component';

describe('SearchflightscheduleComponent', () => {
  let component: SearchflightscheduleComponent;
  let fixture: ComponentFixture<SearchflightscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchflightscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchflightscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
