import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabCardComponent } from './fab-card.component';

describe('FabCardComponent', () => {
  let component: FabCardComponent;
  let fixture: ComponentFixture<FabCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
