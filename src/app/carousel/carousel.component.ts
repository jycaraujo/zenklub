import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
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
  availabilities: Availability[] = [];

  @Input()
  startIndex: number = 0;

  @Output()
  startIndexChange = new EventEmitter<number>();

  @Input()
  endIndex: number = 0;

  @Output()
  endIndexChange = new EventEmitter<number>();

  daysOfWeek: any[] = [];
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

  constructor() {

  }

  ngOnInit(): void {
    this.setIndexes(0, 4);
    this.setDaysOfWeek();
  }

  prev() {
    this.setIndexes(this.startIndex-4, this.startIndex)
    this.setDaysOfWeek()
  }

  next() {
    this.setIndexes(this.endIndex, this.endIndex+4)
    this.setDaysOfWeek()
  }

  setDaysOfWeek() {
    let count = this.startIndex;
    this.daysOfWeek = []
    while (count < this.endIndex && this.availabilities.length > 0) {
      this.daysOfWeek.push({date: new Date(this.availabilities[count].date), openings: this.availabilities[count].openings})
      count++;
    }
  }

  setIndexes(start: number, end: number) {
    this.startIndex = start;
    if (end < this.availabilities.length)
      this.endIndex = end;
    else
      this.endIndex = this.availabilities.length
    this.startIndexChange.emit(this.startIndex)
    this.endIndexChange.emit(this.endIndex)
  }

}
