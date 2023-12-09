import { Component, OnInit } from '@angular/core';
import { ConsultaBDService } from './consulta-bd.service';
import { CarritoService } from './carrito.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  productos: any[] = [];
  categorias: string[] = [];
  selectedCategory: string;


  constructor(private consultaBDService: ConsultaBDService,
              private menuController: MenuController,
              private router: Router,
              private carritoService: CarritoService) {
    this.selectedCategory = '';
  }

  ngOnInit() {;
    this.loadProductosPorCategoria();
    this.loadCategorias(); 
  }

  cerrarMenu() {
    this.selectedCategory = '';
    this.menuController.close();
    this.loadProductosPorCategoria();
  }
   
  verDetalle(productId: number) {
    this.router.navigate(['/detalle', productId]);
  }

  loadCategorias() {
    this.consultaBDService.getCategorias().subscribe(
      (categorias: string[]) => {
      this.categorias = categorias;  
      this.loadProductosPorCategoria();
    },
    (error) => {
      console.error('Error al obtener categorías:', error);
    }
    );
  }
  
  loadProductosPorCategoria() {
    if (this.selectedCategory) {
      this.consultaBDService.getProductoPorCategoria(this.selectedCategory).subscribe(
        (productos: any[]) => {
          this.productos = productos; 
        },
        (error) => {
          console.error('Error al obtener productos por categoría:', error);
        }
      );
    } else {
      this.consultaBDService.getProductos().subscribe(
        (productos: any) => {
          if (Array.isArray(productos)) {
            this.productos = productos;  
          } else {
            console.error('La respuesta no es un array de productos:', productos);
          }
        },
        (error) => {
          console.error('Error al obtener todos los productos:', error);
        }
      );
    }
  }

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarAlCarrito(producto);
  }

  obtenerProductosEnCarrito() {
    return this.carritoService.obtenerProductos();
  }

  calcularTotal() {
    return this.carritoService.calcularTotal();
  }

}  
  
