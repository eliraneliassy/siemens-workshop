import { Injectable } from '@angular/core';
import {Book} from "@siemens/books";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartStateService {

  private cart$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  numberOfItemsInCart$: Observable<number> = this.cart$.pipe(
    map((cart: Book[]) => cart.length)
  );

  addToCart(book: Book): void {
    // this.cart.push(book);
    let currentCart = this.cart$.getValue();
    currentCart = [...currentCart, book];
    this.cart$.next(currentCart);


  }



  getCart() {
     return this.cart$.asObservable();
  }
}
