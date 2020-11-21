import {Component, Input, OnInit} from '@angular/core';
import {Availability} from "../../models/availability";

declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {

  @Input()
  startsIn: Date = new Date();

  @Input()
  availabilities: Availability[] = []

  daysOfWeek: Date[] = []
  startIndex: number = 0;
  endIndex: number = 0;
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

  constructor() {
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
      this.availabilities.push(availability)
    }
  }

  ngOnInit(): void {
    this.setIndexes(0, 4);
    this.setDaysOfWeek();
  }

  setDaysOfWeek() {
    let count = this.startIndex;
    while (count < this.endIndex && this.availabilities.length > 0) {
      this.daysOfWeek.push(new Date(this.availabilities[count].date))
      count++;
    }
  }

  setIndexes(start: number, end: number) {
    this.startIndex = start;
    if (end < this.availabilities.length)
      this.endIndex = end;
    else
      this.endIndex = this.availabilities.length
  }

}
