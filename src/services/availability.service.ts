import { Injectable } from '@angular/core';
import {Availability} from "../models/availability";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get(): Observable<Availability[]> {
    return this.http.get<Availability[]>(this.apiUrl)
      .pipe(map(l => l.map(availability => new Availability().deserialize(availability))));
  }
}
