import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlayerComponent } from './add-flayer.component';

describe('AddFlayerComponent', () => {
  let component: AddFlayerComponent;
  let fixture: ComponentFixture<AddFlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
