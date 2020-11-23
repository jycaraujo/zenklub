import {Injectable} from '@angular/core';
import {Availability} from "../../models/availability";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from 'rxjs/internal/operators';
import {SearchResult} from "../../models/search-result";

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  get(params?: any): Observable<SearchResult<Availability>> {
    return this.http.get(this.apiUrl, params)
      .pipe(map(data => new SearchResult<Availability>(Availability).deserialize(data)));
  }
}
