import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFlayersComponent } from './all-flayers.component';

describe('AllFlayersComponent', () => {
  let component: AllFlayersComponent;
  let fixture: ComponentFixture<AllFlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
