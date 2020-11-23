import {Component, Input} from '@angular/core';
import {Availability} from "../../models/availability";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent {

  @Input()
  availabilities?: Availability[];

}
