import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  @Input()
  profile: User = new User();

  constructor() {
    this.profile.firstName = 'Ana'
    this.profile.lastName = 'Maria'
    this.profile.address.city = 'Lisbon'
    this.profile.occupation = 'Psychologist'
    this.profile.rating = 5
    this.profile.price = 160
  }

  ngOnInit(): void {
  }

}
