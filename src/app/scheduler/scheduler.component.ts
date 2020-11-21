import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.sass']
})
export class SchedulerComponent implements OnInit {

  startsIn: Date = new Date();
  endsIn: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
