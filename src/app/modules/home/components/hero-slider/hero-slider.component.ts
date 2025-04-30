import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HomeCarousel } from '../../../../data/homeCarousel.model';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.css'
})
export class HeroSliderComponent implements OnInit {

  homeCarousel: HomeCarousel[] = [];
  constructor(private homeService: HomeService) {}

  ngOnInit(): void { // Mueve la lógica aquí
    this.loadCarousel();
  }

  private loadCarousel(): void{
    this.homeService.getCarousel().subscribe({
      next: (resp)=> {
        this.homeCarousel = resp;
      },
      error: (err)=> {
        console.error('Error al cargar carrusel:', err);
      }
    });
  }
}
