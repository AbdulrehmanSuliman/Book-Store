import { Component, EventEmitter, Input } from '@angular/core';
import { Book } from '../../../types/Book';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: Book = {} as Book;
  isInCart: boolean = false;
  constructor(private cartService: CartService) {}
  addToCart() {
    this.isInCart = true;
    this.cartService.add(this.book);
  }
  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
