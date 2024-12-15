import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotgunsComponent } from './shotguns.component';

describe('ShotgunsComponent', () => {
  let component: ShotgunsComponent;
  let fixture: ComponentFixture<ShotgunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShotgunsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShotgunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
