import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaBDService } from '../consulta-bd.service';
import { MenuController } from '@ionic/angular';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
 id: any;
 productoDetalles: any =[];
 
  constructor(
    private activatedRoute: ActivatedRoute,
    private consultaBDService: ConsultaBDService,
    private menuController: MenuController,
    private carritoService: CarritoService
  ) { console.log("pagina de detalle iniciada");}

   cerrarMenu(){
    this.menuController.close();
   }

   agregarAlCarrito(producto: any) {
    this.carritoService.agregarAlCarrito(producto);
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("ID:",this.id);
    
    this.consultaBDService.getProducto(Number(this.id)).subscribe(
      (producto) => {
        this.productoDetalles = producto;
      console.log("Nombre:", this.productoDetalles.title);
      console.log("Precio:", this.productoDetalles.price);
      console.log("Rating:", this.productoDetalles.rating.rate);
    },
    (error) => {
      console.error('Error al obtener el producto:', error);
    }
    );
  }
 } 




