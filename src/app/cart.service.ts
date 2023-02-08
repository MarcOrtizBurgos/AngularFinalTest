import { User } from './products';
import { Injectable } from '@angular/core';
/* . . . */
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: User[] = [];
  /* . . . */

  addToCart(product: User) {
    this.clearCart();
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  /* . . . */
}
