import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {MockUserService} from "../../services/user/mock-user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  @Input()
  profile?: User;

  constructor(private mockUserService: MockUserService) {
    this.setProfile();
  }

  ngOnInit(): void {
  }

  setProfile() {
    this.mockUserService.getById().subscribe(user => {
      this.profile = user;
      console.log(user)
    })
  }

}
