import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BOOKS_API_RESPONSE} from "./books-response.mock";
import {of} from "rxjs";

describe('BooksService', () => {
  let service: BooksService;
  const httpClientMock: HttpClient = {
    get: () => {of(BOOKS_API_RESPONSE)}
  } as any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        {provide: HttpClient, useValue: httpClientMock}
      ]
    });
    service = TestBed.inject(BooksService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get books', () => {
    jest.spyOn(httpClientMock, 'get').mockReturnValue(BOOKS_API_RESPONSE);

    service.getBooks('angular').subscribe(

    )


  })
});
