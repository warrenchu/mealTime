import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSplitterComponent } from './bill-splitter.component';

describe('BillSplitterComponent', () => {
  let component: BillSplitterComponent;
  let fixture: ComponentFixture<BillSplitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillSplitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
