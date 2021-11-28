import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlanTuringComponent } from './alan-turing.component';

describe('AllanTuringComponent', () => {
  let component: AlanTuringComponent;
  let fixture: ComponentFixture<AlanTuringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlanTuringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlanTuringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
