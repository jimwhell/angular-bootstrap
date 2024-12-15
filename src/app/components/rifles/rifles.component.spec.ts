import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiflesComponent } from './rifles.component';

describe('RiflesComponent', () => {
  let component: RiflesComponent;
  let fixture: ComponentFixture<RiflesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiflesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiflesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
