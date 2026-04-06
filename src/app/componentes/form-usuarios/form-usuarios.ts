import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../servicos/auth';

@Component({
  selector: 'app-form-usuarios',
  standalone: false,
  templateUrl: './form-usuarios.html',
  styleUrl: './form-usuarios.css',
})
export class FormUsuarios {
  registroForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    roles: new FormControl('', Validators.required),
});
constructor(@Inject(Auth) private authService: Auth) {}
enviar() {
  this.authService.registrar(this.registroForm.value);  
}
}