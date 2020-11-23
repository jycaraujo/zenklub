import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingModule} from "ng-starrating";
import {ProfileComponent} from "./profile.component";



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RatingModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
