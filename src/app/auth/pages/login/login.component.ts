import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  texto: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  texto: string = '';

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit(): void {
    // console.log(this.form.value);
    this.login(this.form);
    // Reseteo el form
    this.form.reset();
  }

  login(form: FormGroup): void {
    this.loginService.login(form.value.email, form.value.password).subscribe(
      (resp) => {
        if (resp.rol?.id == 2) {
          localStorage.setItem('cadete', JSON.stringify(resp.fullName));
          localStorage.setItem('cadeteId', JSON.stringify(resp.id));
          this.router.navigate(['/dash/home']);
          this.openSnackBar('Logeado correctamente', 'ok', 'bg-green');
        } else if (resp.rol?.id == 1) {
          this.texto = 'Admin';
          this.openDialog();
        } else {
          this.texto = 'Usuario Final';
          this.openDialog();
        }
      },
      (error) => {
        this.openSnackBar('Datos introducidos incorrectos', 'ok', 'bg-red');
      }
    );
  }

  loginButton(): void {
    this.form.value.email = 'fs@email.com';
    this.form.value.password = '123';
    this.login(this.form);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLogin, {
      width: '350px',
      data: { texto: this.texto },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.texto = result;
    });
  }
  openSnackBar(message: string, action: string, color: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: [color, 'black'],
    });
  }
}

@Component({
  selector: 'dialog-login',
  templateUrl: 'popUp/popUp.html',
  styleUrls: ['popUp/popUp.scss'],
})
export class DialogLogin {
  constructor(
    public dialogRef: MatDialogRef<DialogLogin>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
