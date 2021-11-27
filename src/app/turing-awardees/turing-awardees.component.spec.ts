import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuringAwardeesComponent } from './turing-awardees.component';

describe('TuringAwardeesComponent', () => {
  let component: TuringAwardeesComponent;
  let fixture: ComponentFixture<TuringAwardeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuringAwardeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuringAwardeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
