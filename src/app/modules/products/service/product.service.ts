import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product, Products } from '../../../data/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = "https://dummyjson.com";
  constructor(private http: HttpClient) {  }

   getFeaturedProducts(): Observable<Products> {
      return this.http.get<Products>(`${this.apiUrl}/products`);
    }


}