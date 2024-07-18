import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoredDataService {
  storedData: any;
  constructor() {
    if (typeof window !== 'undefined' && localStorage) {
      this.storedData = localStorage.getItem('userData');
      console.log(this.storedData);
    }
  }
}
