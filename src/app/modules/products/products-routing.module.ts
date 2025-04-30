import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCatalogComponent } from './pages/product-catalog/product-catalog.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductGridItemComponent } from './components/product-grid-item/product-grid-item.component';
import { ProductCalzadoComponent } from './components/product-calzado/product-calzado.component';
import { ProductVestimentaComponent } from './components/product-vestimenta/product-vestimenta.component';

// Definimos las rutas para el módulo de productos
export const productRoutes: Routes = [
  {
    path: '', // Ruta vacía porque se concatenará con la ruta base en app-routing
    component: ProductCatalogComponent,
    children: [
      { path: '', component: ProductGridItemComponent }, // Ruta por defecto muestra todos los productos
      { path: 'calzado', component: ProductCalzadoComponent },
      { path: 'vestimenta', component: ProductVestimentaComponent }
    ]
  },
  { path: ':id', component: ProductDetailComponent } // Ruta para detalles de producto individual
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {

  const rutas = [
    { path: '', component: ProductGridItemComponent }, // Ruta por defecto muestra todos los productos
    {
      path: 'dashboard',
      canActivate: [AuthGuard],
      loadChildren: () => import('./components/product-grid-item/product-grid-item.component').then(m => m.ProductGridItemComponent)
    },
    { path: 'calzado',
      loadChildren: () => import('./components/product-calzado/product-calzado.component').then(m => m.ProductCalzadoComponent)
    
      { path: 'vestimenta', component: ProductVestimentaComponent }
  ]
 }

