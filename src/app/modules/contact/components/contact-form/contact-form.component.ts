import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService, ContactFormData } from '../../services/contactService.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {
  contactFormGroup!: FormGroup;
  formSubmitted = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    // Inicializar el formulario
    this.contactFormGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      serviceType: ['Selecciona una opción'],
      message: [''],
      acceptTerms: [false, [Validators.requiredTrue]]
    });
  }

  // Getter para acceder fácilmente a los campos del formulario
  get formControl() {
    return this.contactFormGroup.controls;
  }

  // Método para enviar el formulario
  onSubmit(): void {
    this.formSubmitted = true;

    // Detener si el formulario es inválido
    if (this.contactFormGroup.invalid) {
      return;
    }

    const formData: ContactFormData = {
      firstName: this.formControl['firstName'].value,
      lastName: this.formControl['lastName'].value,
      email: this.formControl['email'].value,
      phone: this.formControl['phone'].value,
      serviceType: this.formControl['serviceType'].value,
      message: this.formControl['message'].value,
      acceptTerms: this.formControl['acceptTerms'].value
    };

    // Enviar los datos utilizando el servicio
    this.contactService.sendContactForm(formData).subscribe({
      next: (response) => {
        this.submitSuccess = true;
        this.submitError = false;
        this.contactFormGroup.reset();
        this.formSubmitted = false;
        // Resetear los valores por defecto
        this.contactFormGroup.patchValue({
          serviceType: 'Selecciona una opción',
          acceptTerms: false
        });
      },
      error: (error) => {
        this.submitError = true;
        this.submitSuccess = false;
        this.errorMessage = 'Ha ocurrido un error al enviar el formulario. Por favor intente nuevamente.';
        console.error('Error al enviar el formulario:', error);
      }
    });
  }
}
