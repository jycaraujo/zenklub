import {of} from "rxjs";
import {Availability} from "../../models/availability";
import {SearchResult} from "../../models/search-result";
import {SearchParams} from "../../models/search-params";


export class MockAvailabilityService {
  availabilities: Availability[] = [];

  constructor() {
    let count = 0
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
      this.availabilities.push(availability)
    }
  }

  get(params: SearchParams = new SearchParams()) {
    const res = new SearchResult(Availability);
    res.results = this.availabilities.slice((params?.page-1)*4, params?.page*4);
    res.totalPages = 2
    return of(res);
  }
}
