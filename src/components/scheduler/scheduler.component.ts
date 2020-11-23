import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Availability} from "../../models/availability";
import {MockAvailabilityService} from "../../services/availability/mock-availability.service";
import {AvailabilityService} from "../../services/availability/availability.service";
import {SearchResult} from "../../models/search-result";
import {SearchParams} from "../../models/search-params";

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.sass']
})
export class SchedulerComponent implements OnInit {

  startsIn: Date = new Date();

  startIndex: number = 0;
  endIndex: number = 0;

  searchResults: SearchResult<Availability> = new SearchResult<Availability>(Availability);
  searchParams: SearchParams = new SearchParams();

  constructor(
    private cdRef: ChangeDetectorRef,
    private mockAvailabilityService: MockAvailabilityService,
    private availabilityService: AvailabilityService,
  ) {
    this.setAvailabilities();
  }

  ngOnInit(): void {
    this.cdRef.detectChanges();
  }

  search() {
    console.log(this.searchParams)
    this.setAvailabilities();
  }

  setAvailabilities() {
    this.mockAvailabilityService.get(this.searchParams).subscribe((res: SearchResult<Availability>) => {
      this.searchResults = res;
    });
  }

}
