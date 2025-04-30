import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductSidebarComponent } from './components/product-sidebar/product-sidebar.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductGridItemComponent } from './components/product-grid-item/product-grid-item.component';
import { ProductCatalogComponent } from './pages/product-catalog/product-catalog.component';
import { ProductInfoCardComponent } from './components/product-info-card/product-info-card.component';
import { ProductCalzadoComponent } from './components/product-calzado/product-calzado.component';
import { ProductVestimentaComponent } from './components/product-vestimenta/product-vestimenta.component';
import { ProductsRoutingModule } from './products-routing.module';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';

@NgModule({
  declarations: [
    ProductSidebarComponent,
    ProductGridItemComponent,
    ProductCatalogComponent,
    ProductInfoCardComponent,
    ProductDetailComponent,
    ProductCalzadoComponent,
    ProductVestimentaComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule, //Importamos el m�dulo de rutas de productos
    // RouterModule,
  ],
  exports: [
    CommonModule,
    ProductCatalogComponent
  ],
  providers: [
    provideStore(cartReducer)
  ]
})
export class ProductsModule { }
