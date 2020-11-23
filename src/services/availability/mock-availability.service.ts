import {Observable, Observer} from "rxjs";
import {Availability} from "../../models/availability";

let count = 0;
let availabilities: Availability[] = [];
while (count < 8) {
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
  availabilities.push(availability)
}

export class MockAvailabilityService {
  get() {
    return Observable.create((observer: Observer<Array<Availability>>) => {
      observer.next(availabilities);
    });
  }
}
