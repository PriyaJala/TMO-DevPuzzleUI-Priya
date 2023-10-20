import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar'
import {
  addToReadingList,
  clearSearch,
  getAllBooks,
  ReadingListBook,
  removeFromReadingList,
  searchBooks
} from '@tmo/books/data-access';
import { FormBuilder } from '@angular/forms';
import { Book, ReadingListItem } from '@tmo/shared/models';

@Component({
  selector: 'tmo-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  books: ReadingListBook[];
  isSearching = false;
  searchForm = this.fb.group({
    term: ''
  });

  constructor(
    private readonly store: Store,
    private snackBar: MatSnackBar,
    private readonly fb: FormBuilder
  ) {}

  get searchTerm(): string {
    return this.searchForm.value.term;
  }

  ngOnInit(): void {
    this.store.select(getAllBooks).subscribe(books => {
      this.books = books;
    });
  }

  formatDate(date: void | string) {
    return date
      ? new Intl.DateTimeFormat('en-US').format(new Date(date))
      : undefined;
  }

  addBookToReadingList(book: Book) {
    const b=JSON.parse(JSON.stringify(book));  
    const action = b.isAdded ? 'removed' : 'added';
    const snackBarRef = this.snackBar.open(`Book ${action} to your reading list.`, 'Dismiss', {
      duration: 2000, 
    });
    if (b.isAdded) {
      this.store.dispatch(removeFromReadingList({ item: this.createReadingListItem(book) }));
 
     } else {
       // Book is not in the reading list, so add it
       this.store.dispatch(addToReadingList({ book }));
     }
  }
  createReadingListItem(book: Book): ReadingListItem {
    return {
      bookId: book.id,
      title: book.title,
      authors: book.authors,
      description: book.description
      
    };
  }

  searchExample() {
    this.searchForm.controls.term.setValue('javascript');
    this.searchBooks();
  }

  //This checks whether the user is searching the book
  toggleSearchState() {
    const searchItem = this.searchForm.value.term.trim(); 
    this.isSearching = !this.isSearching;
    if (!this.isSearching) {
      this.searchForm.get('term').setValue(''); // Clear the search query
    }
  }
  searchBooks() {
    const searchItem = this.searchForm.value.term.trim(); 

    if (searchItem) {
      this.store.dispatch(searchBooks({ term: this.searchTerm }));
    } else {
      this.store.dispatch(clearSearch());
    }
  }
}
