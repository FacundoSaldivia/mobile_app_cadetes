import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Viaje } from 'src/app/models/travel';
@Injectable({
  providedIn: 'root',
})
export class ViajesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Viaje> {
    return this.http.get<Viaje>('/api/Travel/1/2');
  }
}
