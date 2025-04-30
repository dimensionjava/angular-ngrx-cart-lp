import { Component, OnInit } from '@angular/core';
import { HomeProduct } from '../../../../data/homeProduct.model';
import { HomeService } from '../../services/home.service';
import { HomeCarousel } from '../../../../data/homeCarousel.model';
import { HomeInfo } from '../../../../data/homeInfo.model';


@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent implements OnInit  {
  homeProduct: HomeProduct[] = [];
  homeCarousel: HomeCarousel[] = [];
  homeInfo: HomeInfo[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void { // Mueve la lógica aquí
    this.loadFeaturedProducts();
  }

  private loadFeaturedProducts(): void {
    this.homeService.getFeaturedProducts().subscribe({
      next: (resp) => {
        this.homeProduct = resp;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
        // Puedes mostrar un mensaje al usuario aquí
      }
    });
  }







}





/* export class FeaturedProductsComponent implements OnInit  {
  products: Product[] = [];


  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getFeaturedProducts().subscribe(resp => {
      this.products = resp;
    })
  }
}
 */
