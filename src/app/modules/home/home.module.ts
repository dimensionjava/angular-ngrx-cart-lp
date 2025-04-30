import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeroSliderComponent,
    FeaturedProductsComponent,
    CompanyInfoComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class HomeModule { }
