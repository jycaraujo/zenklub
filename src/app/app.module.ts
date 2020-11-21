import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CalendarComponent} from './calendar/calendar.component';
import {CarouselComponent} from './carousel/carousel.component';
import {SchedulerComponent} from './scheduler/scheduler.component';
import {ProfileModule} from "./profile/profile.module";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CarouselComponent,
    SchedulerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
