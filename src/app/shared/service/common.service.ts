import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private snackBar:MatSnackBar) { }
  
  showMessage(message: string) {
    this.snackBar.open(message,'', {
      duration: 4000,
      verticalPosition:'top',
      horizontalPosition:'center',
      panelClass:'css-snack'
    });
  }
}
