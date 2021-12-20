import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Viaje } from 'src/app/models/travel';
import { TravelsService } from '../../services/travels.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  texto: string;
  boton: string;
  viaje: Viaje;
}

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss'],
})
export class TravelsComponent implements OnInit {
  constructor(
    private travelService: TravelsService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  cadeteId: number = Number(localStorage.getItem('cadeteId') || ''); //Guardo el id del cadete
  // Inicializo los array
  viajesDisponibles: Viaje[] = [];
  viajesAsignados: Viaje[] = [];
  viajesEnCurso: Viaje[] = [];
  arrAux: Viaje[] = [];
  loading: {}[] = [{}, {}, {}];

  // Comienza en viajesDisponibles
  selected: string = 'viajesDisponibles';
  // Se hacen los get para obtener los viajes
  ngOnInit(): void {
    this.getViajes();
    this.getViajesAsignados();
    this.getViajesEnCurso();
  }

  // Con esta funcion el cadete aclara que obtuvo el producto o que lo entrego (basicamente +1 al statusTravel)
  tomarPedido(viaje: Viaje, viajes: Viaje[], viajes2: Viaje[]): void {
    this.travelService.adquirirViaje(viaje, this.cadeteId).subscribe((resp) => {
      console.log(resp);
    });
    let index = viajes.indexOf(viaje);
    let x = document.getElementsByClassName('example-card');
    x[index].setAttribute(
      'style',
      'transition-property: transform; transition-delay: 10ms; transform: scale(0);'
    );
    viaje.lastStatusTravel = viaje.lastStatusTravel + 1;
    this.borrarDelArray(viaje, index, viajes, viajes2);
    this.openSnackBar('Accion pasada con exito', 'Ok');
  }

  // Comprueba que el viaje que le pasen este en la lista (sirve para los viajes disponibles)
  checkIfStillListed(viaje: Viaje, viajes: Viaje[], viajes2: Viaje[]) {
    let check: boolean = false;
    this.travelService.getAllAvilableRetiro().subscribe((resp) => {
      let contador = 0;
      resp.forEach((e) => {
        contador = contador + 1;
        if (e.id == viaje.id) {
          this.tomarPedido(viaje, viajes, viajes2);
          contador = contador - 1;
        } else if (!check && contador == resp.length) {
          check = true;
        } else if (check && contador == resp.length) {
          this.openDialog(
            'Parece que este viaje ya a sido tomado, recarga la pagina para poder actualizar la lista de viajes',
            '',
            viaje
          );
        }
      });
    });
    this.travelService.getAllAvilableEntrega().subscribe((resp) => {
      let contador = 0;
      resp.forEach((e) => {
        contador = contador + 1;
        if (e.id == viaje.id) {
          this.tomarPedido(viaje, viajes, viajes2);
          contador = contador - 1;
        } else if (!check && contador == resp.length) {
          check = true;
        } else if (check && contador == resp.length) {
          this.openDialog(
            'Parece que este viaje ya a sido tomado, recarga la pagina para poder actualizar la lista de viajes',
            '',
            viaje
          );
        }
      });
    });
  }
  // El cadete cancela el pedido (de 6 a 5 o 2 a 1)
  cancelarPedido(viaje: Viaje) {
    this.travelService
      .darDeBajaViaje(viaje, this.cadeteId)
      .subscribe((resp) => {
        console.log(resp);
      });
    let index = this.viajesAsignados.indexOf(viaje);
    let x = document.getElementsByClassName('example-card');
    x[index].setAttribute(
      'style',
      'transition-property: transform; transition-delay: 10ms; transform: scale(0);'
    );
    viaje.lastStatusTravel = viaje.lastStatusTravel - 1;
    this.borrarDelArray(
      viaje,
      index,
      this.viajesAsignados,
      this.viajesDisponibles
    );
  }
  // Delay para animaciones
  delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  // "Borrar", mueve en envio de un array a otro (por ejemplo, tomas un envio Disponible lo mueve a Asignados)
  borrarDelArray = async (
    viaje: Viaje,
    index: number,
    deViaje: Viaje[],
    aViaje: Viaje[]
  ) => {
    await this.delay(500);
    deViaje.splice(index, 1);
    aViaje.push(viaje);
  };

  // Con esta funcion muestro las observaciones (expande la carta de observaciones)
  expand(viaje: Viaje, viajes: Viaje[]): void {
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

  // Seteo la direccion para generar el link a Google Maps
  verDireccion(viaje: Viaje, viajes: Viaje[]) {
    let direccion = `https://www.google.com/maps/search/?api=1&query=${viaje.travelEquipmentDTOs[0].equipment.cliente.address
      .split(' ')
      .join('+')}+CABA`;
    let index = viajes.indexOf(viaje);
    let link = document.getElementsByClassName('google-maps-btn');
    link[index].setAttribute('href', direccion);
  }

  // Consigo los viajes disponibles
  getViajes(): void {
    this.travelService.getAllAvilableRetiro().subscribe((resp) => {
      this.viajesDisponibles.push.apply(this.viajesDisponibles, resp);
      this.viajesDisponibles.sort(function (a, b) {
        let x: string =
          a.travelEquipmentDTOs[a.travelEquipmentDTOs.length - 1].operationDate;
        let y: string =
          b.travelEquipmentDTOs[b.travelEquipmentDTOs.length - 1].operationDate;
        if (x > y) {
          return 1;
        } else if (x < y) {
          return -1;
        } else {
          return 0;
        }
      });
    });
    this.travelService.getAllAvilableEntrega().subscribe((resp) => {
      this.viajesDisponibles.push.apply(this.viajesDisponibles, resp);
      this.viajesDisponibles.sort(function (a, b) {
        console.log();
        let x: string =
          a.travelEquipmentDTOs[a.travelEquipmentDTOs.length - 1].operationDate;
        let y: string =
          b.travelEquipmentDTOs[b.travelEquipmentDTOs.length - 1].operationDate;

        if (x > y) {
          return 1;
        } else if (x < y) {
          return -1;
        } else {
          return 0;
        }
      });
    });
  }

  // Consigo los viajes asignados
  getViajesAsignados(): void {
    console.log(this.viajesAsignados.length);
    this.travelService.getAllAvilableEntregaAsignado().subscribe((resp) => {
      resp.forEach((e) => {
        if (
          e.travelEquipmentDTOs[e.travelEquipmentDTOs.length - 1].cadete.id ==
          this.cadeteId
        ) {
          console.log(
            'paso entrega',
            e.travelEquipmentDTOs[e.travelEquipmentDTOs.length - 1].cadete.id
          );
          this.viajesAsignados.push(e);
        }
      });
    });
    this.travelService.getAllAvilableRetiroAsignado().subscribe((resp) => {
      resp.forEach((e) => {
        if (
          e.travelEquipmentDTOs[e.travelEquipmentDTOs.length - 1].cadete.id ==
          this.cadeteId
        ) {
          console.log(
            'paso retiro',
            e.travelEquipmentDTOs[e.travelEquipmentDTOs.length - 1].cadete.id
          );
          this.viajesAsignados.push(e);
        }
      });
    });
  }

  // Consigo los viajes en curso
  getViajesEnCurso(): void {
    this.travelService.getAllAvilableEntregaEnCurso().subscribe((resp) => {
      resp.forEach((e) => {
        if (
          e.travelEquipmentDTOs[e.travelEquipmentDTOs.length - 1].cadete.id ==
          this.cadeteId
        ) {
          console.log(
            'paso retiro',
            e.travelEquipmentDTOs[e.travelEquipmentDTOs.length - 1].cadete.id
          );
          this.viajesEnCurso.push(e);
        }
      });
    });
    this.travelService.getAllAvilableRetiroEnCurso().subscribe((resp) => {
      resp.forEach((e) => {
        if (
          e.travelEquipmentDTOs[e.travelEquipmentDTOs.length - 1].cadete.id ==
          this.cadeteId
        ) {
          console.log(
            'paso retiro',
            e.travelEquipmentDTOs[e.travelEquipmentDTOs.length - 1].cadete.id
          );
          this.viajesEnCurso.push(e);
        }
      });
    });
  }

  // Gets para obtener informacion de cada viaje de manera mas ordenada
  getAddress(viaje: Viaje): string {
    return viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length - 1]
      .equipment.cliente.address;
  }
  getNumber(viaje: Viaje): string {
    return viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length - 1]
      .equipment.cliente.cellPhone;
  }
  getDate(viaje: Viaje): string {
    return viaje.travelEquipmentDTOs[
      viaje.travelEquipmentDTOs.length - 1
    ].operationDate.substring(2, 10);
  }
  getTime(viaje: Viaje): string {
    return (
      viaje.travelEquipmentDTOs[
        viaje.travelEquipmentDTOs.length - 1
      ].operationDate
        .substring(5, 10)
        .replace('-', '/') +
      ' ' +
      viaje.travelEquipmentDTOs[
        viaje.travelEquipmentDTOs.length - 1
      ].operationDate.substring(11, 16)
    );
  }
  getEquipo(viaje: Viaje): string {
    return (
      viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length - 1].equipment
        .mark +
      ' ' +
      viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length - 1].equipment
        .model
    );
  }
  getClient(viaje: Viaje): string {
    return viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length - 1]
      .equipment.cliente.fullName;
  }
  getRetiro(viaje: Viaje): string {
    if (viaje.lastStatusTravel < 3) {
      return 'Retiro a domicilio';
    } else {
      return 'Entrega a domicilio';
    }
  }
  getObservations(viaje: Viaje): string {
    if (
      viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length - 1]
        .observation
    ) {
      return `Observaciones: ${
        viaje.travelEquipmentDTOs[viaje.travelEquipmentDTOs.length - 1]
          .observation
      }`;
    }
    return 'No hay observaciones';
  }

  // Dialog para asegurar si el cadete desea cancelar o no el viaje / tambien para cuando el envio que se desea asignar ya estaba tomado
  openDialog(texto: string, boton: string, viaje: Viaje) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        texto: texto,
        boton: boton,
        viaje: viaje,
      },
    });
    // Despues de que se cierre el dialog se devuelve la respuesta (si presiona el boton, result = true)
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cancelarPedido(viaje);
      }
    });
  }

  //Snack var para avisar cuando una solicitud paso con exito
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 20000,
      panelClass: ['bg-green', 'black'],
    });
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'popUp/popUp.html',
  styleUrls: ['popUp/popUp.scss'],
})
export class DialogContentExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
