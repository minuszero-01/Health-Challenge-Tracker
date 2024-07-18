// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { SearchComponent } from './search.component';

// describe('SearchComponent', () => {
//   let component: SearchComponent;
//   let fixture: ComponentFixture<SearchComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [SearchComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(SearchComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SearchComponent } from './search.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchButton: DebugElement;
  let inputElement: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearchComponent,
        MatInputModule,
        MatFormFieldModule,
        CommonModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Query the button and input elements
    searchButton = fixture.debugElement.query(By.css('button'));
    inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event with the correct value when search button is clicked', () => {
    spyOn(component.search, 'emit');

    // Set the input value
    inputElement.value = 'test search';
    inputElement.dispatchEvent(new Event('input')); // Trigger the input event

    // Click the search button
    searchButton.nativeElement.click();

    // Expect the search event to be emitted with the correct value
    expect(component.search.emit).toHaveBeenCalledWith('test search');
  });

  it('should update text property when input value changes', () => {
    const testValue = 'new value';

    // Simulate input event
    inputElement.value = testValue;
    inputElement.dispatchEvent(new Event('input'));

    // Check if the text property is updated
    expect(component.text).toBe(testValue);
  });
});
