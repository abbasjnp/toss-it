import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, DialogComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports :[
    SidebarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
