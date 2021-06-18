import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionEndComponent } from './action-end.component';

describe('ActionEndComponent', () => {
  let component: ActionEndComponent;
  let fixture: ComponentFixture<ActionEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
