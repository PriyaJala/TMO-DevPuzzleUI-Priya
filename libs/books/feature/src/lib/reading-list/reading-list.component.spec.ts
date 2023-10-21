import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@tmo/shared/testing';

import { ReadingListComponent } from './reading-list.component';
import { BooksFeatureModule } from '@tmo/books/feature';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ReadingListComponent', () => {
  let component: ReadingListComponent;
  let fixture: ComponentFixture<ReadingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, SharedTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should remove a book from reading list when Undo is clicked', () => {
    let size=0;
    component.readingList$.subscribe(data => {
      size=data.length;
    }) 
     const buttons = fixture.debugElement.queryAll(By.css('button'));
  
    // Find the button containing "Undo" text
    const undoButton = buttons.find((button: DebugElement) => button.nativeElement.textContent.includes('Undo'));
 // Check if the button was found
 if (undoButton) { 
    // Click the "Undo" button
    undoButton.triggerEventHandler('click', {});

    expect(size).toBe(size-1); 
 }

  });
 
});
