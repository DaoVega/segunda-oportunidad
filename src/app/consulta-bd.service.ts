import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaBDService {
  constructor(
    private http: HttpClient
    ) { }
    
    
    getProductos(){ //obtener todos los productos
      return this.http.get('https://fakestoreapi.com/products')
    }
    
    getCategorias():Observable<string[]>{ //obtener todas las categorias
      //https://fakestoreapi.com/products/categories
      return this.http.get<string[]>('https://fakestoreapi.com/products/categories')
    }
    
    getProducto(id: number) { //Obtener un producto en particular
      //https://fakestoreapi.com/products/1
      return this.http.get('https://fakestoreapi.com/products/' + id.toString())
    }
    
    getProductoPorCategoria(categoria: string):Observable<any[]>{ //obtener lista de productos por categoria
      //https://fakestoreapi.com/products/category/jewelry
      return this.http.get<any[]>('https://fakestoreapi.com/products/category/'+ categoria)
    }
    
    deleteProducto(id: number){
      return this.http.delete('https://fakestoreapi.com/products/' + id.toString());
    }
    
    
  }
  