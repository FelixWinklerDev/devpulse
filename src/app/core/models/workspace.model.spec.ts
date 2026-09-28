import { TestBed } from '@angular/core/testing';

import { WorkspaceModel } from './workspace.model';

describe('WorkspaceModel', () => {
  let service: WorkspaceModel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkspaceModel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
