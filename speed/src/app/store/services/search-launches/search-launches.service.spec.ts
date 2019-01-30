// Angular Modules
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Angular Testing
import { TestBed } from '@angular/core/testing';

// Launches Service
import { LaunchesService } from './search-launches.service';

describe('LaunchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        LaunchesService
      ]
    });
  });

  it('should be created', () => {
    const service: LaunchesService = TestBed.get(LaunchesService);
    expect(service).toBeTruthy();
  });
});


