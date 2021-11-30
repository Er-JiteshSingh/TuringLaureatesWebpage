import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLaureateComponent } from './add-laureate.component';

describe('AddLaureateComponent', () => {
  let component: AddLaureateComponent;
  let fixture: ComponentFixture<AddLaureateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLaureateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLaureateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
