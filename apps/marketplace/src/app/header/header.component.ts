import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CartStateService} from "@siemens/cart-state";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'siemensworkshop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe, RouterLink]
})
export class HeaderComponent {
  numberOfItemsInCart$: Observable<number>;

  constructor(private cartState: CartStateService) {

    this.numberOfItemsInCart$ = this.cartState.numberOfItemsInCart$;
  }

}
