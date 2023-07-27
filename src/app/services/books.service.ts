import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}
  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Abdulrehman',
        amount: 700,
        url: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      },
      {
        name: 'Clean Code Hatem',
        author: 'Hatem',
        amount: 800,
        url: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      },
      {
        name: 'Clean Code Ramsy',
        author: 'Ramsy',
        amount: 900,
        url: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      },
      {
        name: 'Clean Code Kamel',
        author: 'Kamel',
        amount: 800,
        url: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      },
    ];
  }
}
