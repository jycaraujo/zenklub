import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Availability} from "../../models/availability";
import {SearchResult} from "../../models/search-result";
import {SearchParams} from "../../models/search-params";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent {

  @Input()
  startsIn: Date = new Date();

  @Input()
  searchResult: SearchResult<Availability> = new SearchResult<Availability>(Availability);

  @Input()
  searchParams: SearchParams = new SearchParams();

  @Output()
  searchParamsChange = new EventEmitter<SearchParams>();

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

  prev() {
    this.searchParams.page -= 1;
    this.searchParamsChange.emit(this.searchParams);
  }

  next() {
    this.searchParams.page += 1;
    this.searchParamsChange.emit(this.searchParams);
  }

}
