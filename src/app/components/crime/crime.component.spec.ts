import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeComponent } from './crime.component';

describe('CrimeComponent', () => {
  let component: CrimeComponent;
  let fixture: ComponentFixture<CrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
