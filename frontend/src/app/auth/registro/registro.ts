import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.html',  // ⚠ SIN .component
  styleUrl: './registro.css'       // ⚠ SIN .component
})
export class Registro {

  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log('Datos válidos:', this.registroForm.value);
    } else {
      this.registroForm.markAllAsTouched();
    }
  }
}
