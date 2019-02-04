import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {SharedModule} from './../shared/shared.module';
import { UserComponent } from './user/user.component';
import { CoupanComponent } from './coupan/coupan.component';
import { RegisterShopComponent } from './register-shop/register-shop.component';
import { AllFlayersComponent } from './all-flayers/all-flayers.component';
import { AddFlayerComponent } from './add-flayer/add-flayer.component'
import {AppMaterialModule} from './../app-material/app-material.module'
import { GroceriesComponent } from './all-flayers/groceries/groceries.component';
import { HomeGardensComponent } from './all-flayers/home-gardens/home-gardens.component';
import { AddShopComponent } from './register-shop/add-shop/add-shop.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ShopDetailsComponent } from './register-shop/shop-details/shop-details.component';
import { ChangePasswordComponent } from './register-shop/change-password/change-password.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material'
import { DialogComponent } from '../shared/dialog/dialog.component';

@NgModule({
  declarations: [AdminComponent, UserComponent, CoupanComponent, RegisterShopComponent, AllFlayersComponent, 
                AddFlayerComponent, GroceriesComponent, HomeGardensComponent, AddShopComponent, ShopDetailsComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogComponent],
  exports:[
  ],
  providers:[{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}]
})
export class AdminModule { 
  constructor(){
    console.log('adminModule')
  }
}
