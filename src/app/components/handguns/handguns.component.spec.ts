import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandgunsComponent } from './handguns.component';

describe('HandgunsComponent', () => {
  let component: HandgunsComponent;
  let fixture: ComponentFixture<HandgunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandgunsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandgunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
