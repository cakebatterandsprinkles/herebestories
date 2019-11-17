import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChronometerComponent } from './main-chronometer.component';

describe('MainChronometerComponent', () => {
  let component: MainChronometerComponent;
  let fixture: ComponentFixture<MainChronometerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChronometerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChronometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
