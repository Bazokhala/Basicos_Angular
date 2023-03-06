import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  //Obtiene el producto, usa el metodo CartService/addToCart() para agregar el producto al carro y luego muestra un mensaje
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Tu producto a sido agregado al carro');
  }

  ngOnInit() {
    //Obtener el id del producto de la ruta
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //Buscar el producto que corresponde al id de arriba
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
