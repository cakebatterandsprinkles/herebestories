import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLandingLinksComponent } from './navbar-landing-links.component';

describe('NavbarLandingLinksComponent', () => {
  let component: NavbarLandingLinksComponent;
  let fixture: ComponentFixture<NavbarLandingLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLandingLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLandingLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
