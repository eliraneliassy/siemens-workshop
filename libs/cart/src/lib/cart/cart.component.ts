import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {Book, BookComponent} from "@siemens/books";
import {CartStateService} from "@siemens/cart-state";
import {AsyncPipe, NgFor} from "@angular/common";

@Component({
  selector: 'siemensworkshop-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe, NgFor, BookComponent]
})
export class CartComponent {
  cart$?: Observable<Book[]>

  constructor(private cartState: CartStateService) {
    this.cart$ = this.cartState.getCart();

  }
}
