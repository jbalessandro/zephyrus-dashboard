import { TestBed } from '@angular/core/testing';

import { WorkflowServices } from './workflow.service';

describe('WorkflowServices', () => {
  let service: WorkflowServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
