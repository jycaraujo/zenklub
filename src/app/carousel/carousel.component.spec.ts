import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CarouselComponent} from './carousel.component';
import {Availability} from "../../models/availability";

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('setIndexes function to set indexes', () => {
    component.setIndexes(0, 4)
    expect(component.startIndex).toBe(0);
    expect(component.endIndex).toBe(4);
  });

  it('should set days of week', () => {
    let count = 0;
    while (count < 4) {
      let availability = new Availability();
      let date = new Date();
      date.setDate(new Date().getDate() + count);
      availability.date = date;
      availability.openings = [
        "08:00",
        "09:00",
        "10:00",
        "11:00"
      ]
      count++;
      component.availabilities.push(availability)
    }

    expect(component.daysOfWeek.length).toBe(4);
    expect(component.daysOfWeek[1].getDate()).toBe(new Date().getDate() + 1);
    expect(component.daysOfWeek.length).toBeGreaterThan(0);
  });
});
