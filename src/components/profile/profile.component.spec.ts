import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileComponent} from './profile.component';
import {MockUserService} from "../../services/user/mock-user.service";

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [
        {provide: MockUserService, useClass: MockUserService}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set profile', () => {
    component.setProfile()
    expect(component.profile).toBeDefined();
  });
});
