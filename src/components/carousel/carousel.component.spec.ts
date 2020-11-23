import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CarouselComponent} from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set search params to go to next page', () => {
    component.next()
    expect(component.searchParams.page).toBe(2);
  });
  it('should set search params to go to previous page', () => {
    component.searchParams.page = 2
    component.prev()
    expect(component.searchParams.page).toBe(1);
  });
});
