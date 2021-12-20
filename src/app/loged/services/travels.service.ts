import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Viaje } from 'src/app/models/travel';
@Injectable({
  providedIn: 'root',
})
export class TravelsService {
  constructor(private http: HttpClient) {}

  // Recibo los envios disponibles
  getAllAvilableRetiro(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(`/api/Travel/2/1`);
  }
  getAllAvilableEntrega(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(`/api/Travel/2/5`);
  }

  // Recibo los envios asignados
  getAllAvilableRetiroAsignado(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(`/api/Travel/2/2`);
  }
  getAllAvilableEntregaAsignado(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(`/api/Travel/2/6`);
  }

  // Recibo los envios en curso
  getAllAvilableRetiroEnCurso(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(`/api/Travel/2/3`);
  }
  getAllAvilableEntregaEnCurso(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(`/api/Travel/2/7`);
  }

  // Adquierir viaje manda un post request con el id del cadete y aumentandole el statusTravel en 1 (pasa de 1 a 2 o de 5 a 6)
  adquirirViaje(viaje: Viaje, cadeteId: number): Observable<Viaje> {
    return this.http.post<Viaje>(
      `/api/Travel?travelId=${viaje.id}&statusTravel=${
        viaje.lastStatusTravel + 1
      }&userOperation=2&cadeteId=${cadeteId}&isReasigned=false`,
      viaje
    );
  }
  // Dar de baja manda un post request con el id del cadete y decrece el statusTravel en -1 (pasa de 2 a 1 o de 6 a 5)
  darDeBajaViaje(viaje: Viaje, cadeteId: number): Observable<Viaje> {
    return this.http.post<Viaje>(
      `/api/Travel?travelId=${viaje.id}&statusTravel=${
        viaje.lastStatusTravel - 1
      }&userOperation=2&cadeteId=${cadeteId}&isReasigned=true`,
      viaje
    );
  }
  getAllEntregadosRetiro(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(`/api/Travel/2/4`);
  }
  getAllEntregadosEntrega(): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(`/api/Travel/2/8`);
  }
}
