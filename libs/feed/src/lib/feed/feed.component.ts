import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Book, BookComponent, BooksService} from "@siemens/books";
import {Observable} from "rxjs";
import {CartStateService} from "@siemens/cart-state";
import {AsyncPipe, NgFor} from "@angular/common";

@Component({
  selector: 'siemensworkshop-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, AsyncPipe, BookComponent]
})
export class FeedComponent {

  books$: Observable<Book[]>
  constructor(private booksService: BooksService, private cartState: CartStateService) {
    this.books$ = this.booksService.getBooks('angular');
  }

  addToCart(book: Book) {
    this.cartState.addToCart(book);
  }
}
