import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AvailabilityStatus, Category, Products } from '../../../../data/Products';
import { ProductService } from '../../service/product.service';
import { Store } from '@ngrx/store';
import { Product } from '../../../../data/Products';
import { selectCartItems } from '../../store/cart.selector';
import { addToItem } from '../../store/cart.actions';


@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrl: './product-grid-item.component.css'
})
export class ProductGridItemComponent implements OnInit {
  products!: Products;

  //NGRX Store cart
  cartItems$: Observable<Product[]>;

   constructor(
    private productService: ProductService,
    private store: Store ) {
    this.cartItems$ = this.store.select(selectCartItems);
   }

  ngOnInit(): void { 
    // Mueve la lógica aquí
    ///console.log('Cart Items: ', this.cartItems$);
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productService.getFeaturedProducts().subscribe({
      next: (resp) => {
        this.products = resp;
        console.log(this.products)
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
        // Puedes mostrar un mensaje al usuario aquí
      }
    });
  }

  addToCart(){
    this.store.dispatch(addToItem(
      {
        product: {
          id: 1,
          title: 'Producto de prueba',
          description: 'Descripción del producto de prueba',
          category: Category.Beauty,
          price: 100,
          discountPercentage: 10,
          rating: 4.5,
          stock: 10,
          tags: ['tag1', 'tag2'],
          brand: 'Marca de prueba',
          sku: 'SKU123',
          weight: 1,
          dimensions: {
            width: 10,
            height: 10,
            depth: 10
          },
          warrantyInformation: 'Información de garantía',
          shippingInformation: 'Información de envío',
          reviews: [],
          minimumOrderQuantity: 1,
          meta: {
            createdAt: new Date(),
            updatedAt: new Date(),
            barcode: '1234567890',
            qrCode: '1234567890'
          },
          images: ['https://via.placeholder.com/150'],
          thumbnail: 'https://via.placeholder.com/150'
        }
      })
    );
  }


}
