import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly API_URL = 'https://projeto-node-step-git-main-fabios-projects-d2648344.vercel.app/api/auth';
  
  private usuario: any = null;

  constructor(private http: HttpClient) {}

  registrar(dadosUsuario: any): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, dadosUsuario);
  }

  /**
   * NOVO: Método para realizar o POST de login na API
   * @param credenciais Objeto contendo email e senha (ou nome e senha)
   */
  fazerLogin(credenciais: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login`, credenciais).pipe(
      tap(res => {
        if (res) {
          this.usuario = res.user || res; 
        }
      })
    );
  }

  login(nome: string, role: string) {
    this.usuario = { nome, role };
  }

  logout() {
    this.usuario = null;
  }

  estaLogado(): boolean {
    return !!this.usuario;
  }

  temRole(role: string): boolean {
    return this.usuario?.role === role;
  }
}