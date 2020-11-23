import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from 'rxjs/internal/operators';
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getById(params?: any): Observable<User> {
    return this.http.get<User>(this.apiUrl)
      .pipe(map(l => new User().deserialize(l)));
  }
}
