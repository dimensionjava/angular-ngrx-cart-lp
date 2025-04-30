import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HomeProduct } from '../../../data/homeProduct.model';
import { HomeCarousel } from '../../../data/homeCarousel.model';
import { HomeInfo } from '../../../data/homeInfo.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl: string = "http://localhost:3000";
  constructor(private http: HttpClient) {  }



   /*  getFeaturedProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl);
    } */

    getFeaturedProducts(): Observable<HomeProduct[]> {
      return this.http.get<HomeProduct[]>(`${this.apiUrl}/home-products`);
    }

    getCarousel(): Observable<HomeCarousel[]> {
      return this.http.get<HomeCarousel[]>(`${this.apiUrl}/home-carousel`);
    }

    getInfo(): Observable<HomeInfo[]> {
      return this.http.get<HomeInfo[]>(`${this.apiUrl}/home-info`);
    }









    getProductById(id: string): Observable<HomeProduct> {
      return this.http.get<HomeProduct>(`${this.apiUrl}/${id}`);
    }
  }



