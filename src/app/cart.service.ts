import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}

  //Adjunta los productos a un array de items
  addToCart(product: Product) {
    this.items.push(product);
  }

  //Obtiene los items agregados al carro y los regresa con su cantidad
  getItems() {
    return this.items;
  }

  //Limpia el carro con un array vacio
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
