import { TestBed } from '@angular/core/testing';
import { StoredDataService } from './stored-data.service';

describe('StoredDataService', () => {
  let service: StoredDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoredDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve stored data from localStorage if available', () => {
    const testData = JSON.stringify({ name: 'test' });
    spyOn(localStorage, 'getItem').and.returnValue(testData);

    service = TestBed.inject(StoredDataService);

    expect(service.storedData).toEqual(testData);
  });

  it('should set storedData to null if localStorage is not available', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    service = TestBed.inject(StoredDataService);

    expect(service.storedData).toBeNull();
  });

  it('should handle window being undefined', () => {
    const originalWindow = window;
    (window as any) = undefined;

    service = TestBed.inject(StoredDataService);

    expect(service.storedData).toBeUndefined();

    window = originalWindow;
  });
});
