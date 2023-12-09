import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import ('./detalle/detalle.module').then(m=> m.DetallePageModule)
  },
  {
   path: 'carrito',
   loadChildren: () => import ('./carrito/carrito.module').then(m => m.CarritoPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
