import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingModule} from "ng-starrating";
import {ProfileComponent} from "./profile.component";
import {MockUserService} from "../../services/user/mock-user.service";



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RatingModule
  ],
  providers: [
    MockUserService
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
