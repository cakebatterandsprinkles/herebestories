import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPromptComponent } from './main-prompt.component';

describe('MainPromptComponent', () => {
  let component: MainPromptComponent;
  let fixture: ComponentFixture<MainPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
