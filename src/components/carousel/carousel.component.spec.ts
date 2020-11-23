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
  it('should set indexes', () => {
    let count = 0;
    let availabilities = []
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
      availabilities.push(availability)
    }

    component.availabilities = availabilities
    component.setIndexes(0, 4)
    expect(component.startIndex).toBe(0);
    expect(component.endIndex).toBe(4);
  });
  it('should set end index with the length of availability', () => {
    let count = 0;
    let availabilities = []
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
      availabilities.push(availability)
    }

    component.availabilities = availabilities
    component.setIndexes(0, 8)
    expect(component.startIndex).toBe(0);
    expect(component.endIndex).toBe(4);
  });

  it('should set previous indexes', () => {
    let count = 0;
    let availabilities = []
    while (count < 8) {
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
      availabilities.push(availability)
    }

    component.availabilities = availabilities
    component.setIndexes(4, 8)
    component.prev()
    expect(component.startIndex).toBe(0);
    expect(component.endIndex).toBe(4);
  });

  it('should set next indexes', () => {
    let count = 0;
    let availabilities = []
    while (count < 8) {
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
      availabilities.push(availability)
    }

    component.availabilities = availabilities
    component.setIndexes(0, 4)
    component.next()
    expect(component.startIndex).toBe(4);
    expect(component.endIndex).toBe(8);
  });

  it('should set days of week', () => {
    let count = 0;
    let availabilities = []
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
      availabilities.push(availability)
    }

    component.availabilities = availabilities

    component.setIndexes(0, 4)
    component.setDaysOfWeek()

    expect(component.daysOfWeek.length).toBe(4);
    expect(component.daysOfWeek[1].date.getDate()).toBe(new Date().getDate() + 1);
    expect(component.daysOfWeek.length).toBeGreaterThan(0);
  });
});
