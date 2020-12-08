import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSlideComponent } from './welcome-slide.component';

describe('WelcomeSlideComponent', () => {
  let component: WelcomeSlideComponent;
  let fixture: ComponentFixture<WelcomeSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
