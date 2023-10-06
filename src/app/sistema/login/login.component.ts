import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  roteador = inject(Router);

  usuario: Usuario = new Usuario();

  loggin() {
    if (this.usuario.login == 'kaue' && this.usuario.senha == 'admin') {
      this.roteador.navigate(['/admin/pessoas']);
    } else alert('Usuario ou sneha invalidos');
  }
}
