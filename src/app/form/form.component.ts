import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

import { users } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    surname: '',
    email: '',
    id: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    users.push({
      name: '' + this.checkoutForm.value.name,
      surname: '' + this.checkoutForm.value?.surname,
      email: '' + this.checkoutForm.value.email,
      id: '' + this.checkoutForm.value.id,
    });
    console.warn(
      'Your order has been submitted',
      this.checkoutForm.value.email
    );
    this.checkoutForm.reset();
  }
}
