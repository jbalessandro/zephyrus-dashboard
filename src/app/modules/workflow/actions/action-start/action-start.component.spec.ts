import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionStartComponent } from './action-start.component';

describe('ActionStartComponent', () => {
  let component: ActionStartComponent;
  let fixture: ComponentFixture<ActionStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
