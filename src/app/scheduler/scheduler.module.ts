import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SchedulerComponent} from "./scheduler.component";
import {CalendarComponent} from "../calendar/calendar.component";
import {CarouselComponent} from "../carousel/carousel.component";
import {MockAvailabilityService} from "../../services/mock-availability.service";


@NgModule({
  declarations: [
    SchedulerComponent,
    CalendarComponent,
    CarouselComponent
  ],
  providers: [
    MockAvailabilityService
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SchedulerComponent
  ]
})
export class SchedulerModule {
}
