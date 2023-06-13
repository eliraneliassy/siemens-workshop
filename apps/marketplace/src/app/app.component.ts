import {Component, inject, OnInit} from '@angular/core';
import {BooksService} from "@siemens/books";

@Component({
  selector: 'siemensworkshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements  OnInit{
  title = 'marketplace';

  booksService: BooksService = inject(BooksService);

  ngOnInit(): void {
    this.booksService.getBooks('angular').subscribe(console.log)
  }



}
