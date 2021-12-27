import { Component, OnInit } from '@angular/core';
import { dto } from 'src/app/models/dto';
import { TravelsService } from '../../services/travels.service';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit {
  constructor(private travelService: TravelsService) {}
  cadeteId: number = Number(localStorage.getItem('cadeteId') || ''); //Guardo el id del cadete
  // Inicializo los viajes
  viajesRealizados: dto[] = [];
  viajesRealizados2: historial[] = [];
  loading: {}[] = [{}, {}, {}, {}, {}, {}, {}];

  // llamada de inicio para obtener la informacion
  ngOnInit(): void {
    // this.getViajesRealizados();
    this.getViajesRealizados2();
  }
  // Obtengo los viajes,se ordenan y se filtran segun el cadete
  // getViajesRealizados(): void {
  //   this.travelService.getAllEntregadosRetiro().subscribe((resp) => {
  //     // Resp es un array de Viajes
  //     resp.forEach((e) => {
  //       // Por cada viaje, este tiene un array de DTO
  //       e.travelEquipmentDTOs.forEach((dto) => {
  //         // Itero sobre el array y compruebo si en el dto hay una propiedad cadete
  //         if (
  //           dto.cadete &&
  //           (dto.statusTravel == 4 ||
  //             dto.statusTravel == 8 ||
  //             dto.statusTravel == 9)
  //         ) {
  //           // Si la hay comparo con el id del cadete con el id del localStorage
  //           if (dto.cadete.id == this.cadeteId) {
  //             // Si coinciden guardo el dto en un array
  //             this.viajesRealizados.push(dto);
  //           }
  //         }
  //       });
  //       this.viajesRealizados.sort(function (a, b) {
  //         let x: string = a.operationDate;
  //         let y: string = b.operationDate;
  //         if (x < y) {
  //           return 1;
  //         } else if (x > y) {
  //           return -1;
  //         } else {
  //           return 0;
  //         }
  //       });
  //     });
  //   });
  //   this.travelService.getAllEntregadosEntrega().subscribe((resp) => {
  //     // Resp es un array de Viajes
  //     resp.forEach((e) => {
  //       // Por cada viaje, este tiene un array de DTO
  //       e.travelEquipmentDTOs.forEach((dto) => {
  //         // Itero sobre el array y compruebo si en el dto hay una propiedad cadete y su estado (4 / 8 / 9 pasan)
  //         if (
  //           dto.cadete &&
  //           (dto.statusTravel == 4 ||
  //             dto.statusTravel == 8 ||
  //             dto.statusTravel == 9)
  //         ) {
  //           // Si la hay comparo con el id del cadete con el id del localStorage
  //           if (dto.cadete.id == this.cadeteId) {
  //             // Si coinciden guardo el dto en un array
  //             this.viajesRealizados.push(dto);
  //           }
  //         }
  //       });
  //       this.viajesRealizados.sort(function (a, b) {
  //         let x: string = a.operationDate;
  //         let y: string = b.operationDate;
  //         if (x < y) {
  //           return 1;
  //         } else if (x > y) {
  //           return -1;
  //         } else {
  //           return 0;
  //         }
  //       });
  //     });
  //   });
  // }
  getViajesRealizados2(): void {
    let viaje1 = this.travelService.getAllEntregadosRetiro();
    let viaje2 = this.travelService.getAllEntregadosEntrega();
    forkJoin([viaje1, viaje2]).subscribe((resp) => {
      let arrAux = [...resp[0], ...resp[1]];
      arrAux.forEach((e) => {
        e.travelEquipmentDTOs.forEach((dto) => {
          if (
            dto.cadete &&
            (dto.statusTravel == 4 ||
              dto.statusTravel == 8 ||
              dto.statusTravel == 9)
          ) {
            // Si la hay comparo con el id del cadete con el id del localStorage
            if (dto.cadete.id == this.cadeteId) {
              // Si coinciden guardo el dto en un array
              let aux: historial = {
                cliente: dto.equipment.cliente.fullName,
                direccion: dto.equipment.cliente.address,
                equipo: dto.equipment.mark + dto.equipment.model,
                observaciones: dto.observation,
                hora: dto.operationDate.substring(11, 16),
                fecha: dto.operationDate.substring(0, 10),
                estado: this.getTravelState(dto.statusTravel),
              };
              this.viajesRealizados2.push(aux);
            }
          }
        });
      });
    });
  }

  // Con esta funcion muestro las observaciones (expande la carta de observaciones)
  expand(viaje: historial, viajes: historial[]): void {
    let index = viajes.indexOf(viaje);
    let x = document.getElementsByClassName('ob');
    let arrow = document.getElementsByClassName('arrow');
    if (arrow[index].classList.length == 5) {
      arrow[index].className =
        'mat-icon notranslate arrow open material-icons mat-icon-no-color';
      x[index].setAttribute(
        'style',
        'display:block ; transition: max-height 0.4s ease;'
      );
    } else {
      arrow[index].className =
        'mat-icon notranslate arrow material-icons mat-icon-no-color';
      x[index].setAttribute(
        'style',
        'display:none; transition: max-height 0.4s ease;'
      );
    }
  }
  // Filtro
  dataSource = new MatTableDataSource(this.viajesRealizados2);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Funciones para obtener la informacion de una manera mas ordenada
  getAddress(dto: dto): string {
    return dto.equipment.cliente.address;
  }

  getClient(dto: dto): string {
    return dto.equipment.cliente.fullName;
  }

  getBrand(dto: dto): string {
    return dto.equipment.mark;
  }

  getModel(dto: dto): string {
    return dto.equipment.model;
  }

  getTravelState(status: number): string {
    if (status == 4) {
      return 'Retiro finalizado';
    } else {
      return 'Entrega finalizada';
    }
  }

  getAdress(dto: dto): string {
    return dto.equipment.cliente.address;
  }

  getFecha(dto: dto): string {
    return dto.operationDate.substring(0, 10);
  }
  getTime(dto: dto): string {
    return dto.operationDate.substring(11, 16);
  }

  getObservaciones(dto: dto): string {
    if (dto.observation) {
      return dto.observation;
    } else {
      return 'No hay observaciones';
    }
  }
}

interface historial {
  cliente: string;
  fecha: string;
  hora: string;
  equipo: string;
  estado: string;
  observaciones: string;
  direccion: string;
}
