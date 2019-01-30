import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {MatTabsModule} from '@angular/material'
import{MatIconModule} from '@angular/material'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule
    
  ],
  exports :[
      MatTableModule,
      MatTabsModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatSnackBarModule,
      MatOptionModule,
      MatSelectModule
  ]
})
export class AppMaterialModule { }
