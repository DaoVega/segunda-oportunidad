import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos: any[] = [];

  ngOnInit(){
}
  agregarAlCarrito(producto: any) {
    this.productos.push(producto);
    console.log("Producto agregado:", producto.title);
  }

  obtenerProductos() {
    return this.productos;
  }

  calcularTotal() {
    return this.productos.reduce((total, producto) => total + producto.price, 0);
  }
}