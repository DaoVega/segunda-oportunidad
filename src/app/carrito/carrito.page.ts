import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
 carrito: any = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    console.log("Carrito Page Iniciada");
  }

  obtenerProductosEnCarrito() {
    console.log("Carrito:", this.carrito);
    return this.carrito;
  }

  calcularTotal() {
    console.log("Total:", this.carritoService.calcularTotal())
    return this.carritoService.calcularTotal();
  }
}
