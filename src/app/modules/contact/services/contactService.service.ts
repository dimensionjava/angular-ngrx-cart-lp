import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaz para el formulario de contacto
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  serviceType?: string;
  message?: string;
  acceptTerms?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Método para enviar los datos del formulario a la API
  sendContactForm(formData: ContactFormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact-form/`, formData);
  }
}
