import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllanTuringComponent } from './allan-turing.component';

describe('AllanTuringComponent', () => {
  let component: AllanTuringComponent;
  let fixture: ComponentFixture<AllanTuringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllanTuringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllanTuringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
