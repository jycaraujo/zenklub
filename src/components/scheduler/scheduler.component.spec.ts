import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchedulerComponent} from './scheduler.component';
import {MockAvailabilityService} from "../../services/availability/mock-availability.service";

describe('SchedulerComponent', () => {
  let component: SchedulerComponent;
  let fixture: ComponentFixture<SchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchedulerComponent],
      providers: [
        {provide: MockAvailabilityService, useClass: MockAvailabilityService}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
