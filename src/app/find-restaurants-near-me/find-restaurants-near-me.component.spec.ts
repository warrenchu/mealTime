import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRestaurantsNearMeComponent } from './find-restaurants-near-me.component';

describe('FindRestaurantsNearMeComponent', () => {
  let component: FindRestaurantsNearMeComponent;
  let fixture: ComponentFixture<FindRestaurantsNearMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindRestaurantsNearMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRestaurantsNearMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
