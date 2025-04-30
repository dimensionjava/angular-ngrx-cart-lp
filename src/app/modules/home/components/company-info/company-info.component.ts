import { Component, OnInit } from '@angular/core';
import { HomeInfo } from '../../../../data/homeInfo.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.css'
})
export class CompanyInfoComponent implements OnInit {
  homeInfo: HomeInfo[] = [];

  constructor(private homeService: HomeService) { }


  ngOnInit(): void { // Mueve la lógica aquí
    this.loadInfo();
  }

  private loadInfo(): void {
    this.homeService.getInfo().subscribe({
      next: (resp) => {
        this.homeInfo = resp;
      },
      error: (err) => {
        console.error('Error al cargar info:', err);
      }
    });
  }


}
