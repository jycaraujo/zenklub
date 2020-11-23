import {Component, Input, OnInit} from '@angular/core';
import {Availability} from "../../models/availability";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {

  @Input()
  availabilities?: Availability[];

  @Input()
  startIndex: number = 0;

  @Input()
  endIndex: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
