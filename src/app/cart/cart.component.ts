import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  //Este codigo obtiene los items usando CartService getItems() que se creo al usar ng generate service cart
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  //Recordar que luego de hacer el import se debe de inyectar en el constructor lo que se use
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    //Procesa la data de checkout
    this.items = this.cartService.clearCart();
    console.warn('Tu Orden a sido recibida', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
