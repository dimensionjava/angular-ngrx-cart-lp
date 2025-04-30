import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { ContactPageComponent } from './modules/contact/page/contact-page/contact-page.component';

// Importamos las rutas desde el m�dulo de productos
import { productRoutes } from './modules/products/products-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomePageComponent },
  {
    path: 'home',
    children: productRoutes // Incluimos las rutas del m�dulo de productos aqu� (sin lazy loading)
  },
  { path: 'contact', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
