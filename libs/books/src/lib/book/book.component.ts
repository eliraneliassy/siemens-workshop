import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {Book} from "../book.interface";
import {ButtonComponent} from "@siemens/ui";

@Component({
  selector: 's-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ButtonComponent, NgIf]
})
export class BookComponent {
  @Input() book?: Book;

  @Output() addToCart = new EventEmitter<Book>();

  handleAddToCart(){
    this.addToCart.emit(this.book);
  }
}


