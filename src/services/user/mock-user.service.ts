import {Observable, Observer, of} from "rxjs";
import {User} from "../../models/user";


export class MockUserService {

  user = new User();

  constructor() {
    this.user.firstName = 'Ana'
    this.user.lastName = 'Maria'
    this.user.address.city = 'Lisbon'
    this.user.occupation = 'Psychologist'
    this.user.rating = 5
    this.user.price = 160
  }

  getById() {
    return of(this.user);
  }
}
