import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Book[] = [];

  constructor() {}
  add(book: Book) {
    this.cart.push(book);
  }
  get() {
    return this.cart;
  }
  remove(book: Book) {
    this.cart = this.cart.filter((b) => book.name !== b.name);
  }
}
