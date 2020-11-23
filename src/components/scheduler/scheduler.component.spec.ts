import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchedulerComponent} from './scheduler.component';
import {MockAvailabilityService} from "../../services/availability/mock-availability.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SchedulerComponent', () => {
  let component: SchedulerComponent;
  let fixture: ComponentFixture<SchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchedulerComponent],
      imports: [HttpClientTestingModule],
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
