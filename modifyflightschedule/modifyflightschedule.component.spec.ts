import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyflightscheduleComponent } from './modifyflightschedule.component';

describe('ModifyflightscheduleComponent', () => {
  let component: ModifyflightscheduleComponent;
  let fixture: ComponentFixture<ModifyflightscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyflightscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyflightscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
