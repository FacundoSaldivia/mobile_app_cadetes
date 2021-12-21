import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<Usuario> {
    return this.http.get<Usuario>(
      `http://logistica.asambleas.cl/api/login?email=${email}&password=${password}`
    );
  }
}
