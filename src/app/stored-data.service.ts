import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoredDataService {
  storedData: any;
  constructor() {
    //Retrieve Data From Local storage
    if (typeof window !== 'undefined' && localStorage) {
      this.storedData = localStorage.getItem('userData');
      console.log(this.storedData);
    }
  }
}
