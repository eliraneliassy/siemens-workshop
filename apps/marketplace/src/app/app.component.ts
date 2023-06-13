import {Component, inject, OnInit} from '@angular/core';
import {BooksService} from "@siemens/books";
import {delay, of} from "rxjs";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'siemensworkshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent implements  OnInit{
  title = 'marketplace';

  booksService: BooksService = inject(BooksService);

  ngOnInit(): void {
    // this.booksService.getBooks('angular').subscribe(console.log)

    console.log(1);
    Promise.resolve(2).then(console.log);
    of(3).pipe(delay(0)).subscribe(console.log);
    setTimeout(() => console.log(4), 0);
    console.log(5);
  }



}
