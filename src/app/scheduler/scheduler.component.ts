import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Availability} from "../../models/availability";
import {MockAvailabilityService} from "../../services/mock-availability.service";

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.sass']
})
export class SchedulerComponent implements OnInit {

  startsIn: Date = new Date();
  endsIn: Date = new Date();

  startIndex: number = 0;
  endIndex: number = 0;

  availabilities: Availability[] = [];

  constructor(private cdRef: ChangeDetectorRef, private availabilityService: MockAvailabilityService) {
    this.setAvailabilities();
  }

  ngOnInit(): void {
    this.cdRef.detectChanges();
  }

  setAvailabilities() {
    this.availabilityService.get().subscribe((res: Availability[]) => {
      this.availabilities = res;
    });
  }

}
