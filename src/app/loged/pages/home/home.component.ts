import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  usuario = localStorage.getItem('cadete')?.split(' ')[0].replace('"', '');

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogCloseSesion);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'popUp/popUp.html',
  styleUrls: ['popUp/popUp.scss'],
})
export class DialogCloseSesion {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<DialogCloseSesion>
  ) {}
  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
    this.dialogRef.close();
  }
}
