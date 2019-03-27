import { TestBed } from '@angular/core/testing';

import { BlogService } from './blog.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('BlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: BlogService = TestBed.get(BlogService);
    expect(service).toBeTruthy();
  });
});
