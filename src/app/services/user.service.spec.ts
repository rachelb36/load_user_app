import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify no outstanding HTTP calls remain
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users successfully', () => {
    const mockResponse = {
      results: [
        {
          name: { first: 'John', last: 'Doe' },
          email: 'john@example.com',
          dob: { date: '1990-01-01T00:00:00Z' },
        },
      ],
    };

    // Subscribe to getUsers
    service.getUsers(1).subscribe((response) => {
      // We can assert the structure or the data
      expect(response.results.length).toBe(1);
      expect(response.results[0].name.first).toBe('John');
    });

    // Expect that an HTTP GET request was made to the correct URL
    const req = httpMock.expectOne('https://randomuser.me/api/?results=1');
    expect(req.request.method).toBe('GET');

    // Respond with mock data
    req.flush(mockResponse);
  });

  it('should handle error scenario', () => {
    const mockErrorMessage = 'Failed to fetch users.';

    service.getUsers(1).subscribe({
      next: () => {
        fail('Should have failed with an error');
      },
      error: (err) => {
        // The error thrown in our service
        expect(err.message).toBe(mockErrorMessage);
      },
    });

    // Simulate an HTTP failure with status code 500
    const req = httpMock.expectOne('https://randomuser.me/api/?results=1');
    req.flush({}, { status: 500, statusText: 'Server Error' });
  });
});

