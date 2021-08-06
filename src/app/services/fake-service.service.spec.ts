import { TestBed } from '@angular/core/testing';

import { FakeServiceService } from './fake-service.service';
import { HttpClientModule } from '@angular/common/http';
import { doesNotReject } from 'assert';

describe('FakeServiceService', () => {
  let service: FakeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(FakeServiceService);
  });

  it('Should get a response', done => {
    service.fakeCall().subscribe(
      data => {
        expect(data.length).toBeGreaterThan(0);
        done();
      },
      // error => console.log(JSON.stringify(error))
    );
  });
});
52268